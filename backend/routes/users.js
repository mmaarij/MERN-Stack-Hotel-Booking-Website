var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const Users = require('../models/Users')
const Joi = require('joi')
const multer = require('multer')
const crypto = require('crypto')
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");

ACCESS_TOKEN_SECRET = "kajnkankjxnasnxkajsxkansx"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,

    limits: {
        fileSize: 2048 * 2048
    },
    fileFilter: fileFilter
});

function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN_SECRET, {expiresIn: "15m"})
}

const ValidateSignIn = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().max(20).min(6).trim().required().label("Password")
    });
    return schema.validate(data);
};

const ValidateSignUp = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        phone: Joi.string().min(11).max(11).required().label("Phone"),
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().max(20).min(6).trim().required().label("Password")
    });
    return schema.validate(data);
};

const ValidateUpdate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        phone: Joi.string().min(11).max(11).required().label("Phone"),
        email: Joi.string().email().required().label("Email"),
    });
    return schema.validate(data);
};

router.post("/sign_in", async (req, res) => {
    try {
        const {error} = ValidateSignIn(req.body);
        if (error)
            return res.status(400).send({message: error.details[0].message});

        const user = await Users.findOne({email: req.body.email});

        if (!user)
            return res.status(401).send({ message: "Invalid Email or Password" });

        if (user.activation === false)
            return res.status(401).send({ message: "Account Not Activated. Check Your Inbox" });

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!validPassword)
            return res.status(401).send({message: "Invalid Email or Password"});

        const token = generateAccessToken({ user: req.body.email });

        res.status(200).send({name: user.name,email: user.email, data: token, message: "Logged in successfully"});

    } catch (error) {
        res.status(500).send({message: "Internal Server Error"});
    }
});

router.post("/sign_up", async (req, res) => {
    try {
        // const {error} = ValidateSignUp(req.body);
        // if (error)
        //     return res.status(400).send({message: error.details[0].message});

        const user = await Users.findOne({ email: req.body.email });

        if (user)
            return res.status(409).send({ message: "User with given email already Exist!" });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        crypto.randomBytes(32, async (err, buffer) => {
            if (err) {
                console.log(err)
            }
            const token = buffer.toString("hex")
            var html = `<p>You requested for Account Activation</p> <h5>Kindly click on this <a href="http://localhost:3001/activation/?token=` + token + `">link</a> to activate your account</h5>`
            await new Users({
                ...req.body, password: hashPassword, activationToken: token, activation: false
            }).save();

            sgMail.send({
                to: req.body.email,
                from: "serenitypk69@gmail.com",
                subject: "Account Activation",
                html: html
            })
            // res.json({message:"check your email"})
        })

        res.status(201).send({ message: "User created successfully" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});


router.post("/upload_dp", upload.single('profilePicture'), async (req, res) => {

    console.log(req.file)
    try {
        if (req.file && req.file.size <= (2048 * 2048)) {
            const user = await Users.findOne({ email: req.body.email });

            if (!user)
                return res.status(401).send({ message: "Invalid Email" });

            const ImgUrl = "http://localhost:3000/public/uploads/" + req.file.filename

            Users.updateOne({ email: req.body.email }, {
                profilePicture: ImgUrl,
            }, (Error) => {
                if (Error) {
                    return res.status(500).send({ message: "Unable to Update" });
                }
            })

            res.status(200).send({ profilePic: ImgUrl });
        } else
            res.status(400).send({ message: "No file Chosen" });

    } catch (e) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})



router.post("/get_dp", async (req, res) => {
    try {

        const user = await Users.findOne({ email: req.body.email });

        if (!user)
            return res.status(401).send({ message: "Invalid Email or Password" });

        res.status(200).send({ imgUrl: user.profilePicture});

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

router.post("/update_profile", async (req, res) => {

    try {
        const { error } = ValidateUpdate(req.body)

        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await Users.findOne({ email: req.body.email });

        if (!user)
            return res.status(401).send({ message: "Invalid Email" });

        Users.updateOne({ email: req.body.email }, {
            name: req.body.name,
            phone: req.body.phone
        }, (Error) => {
            if (Error) {
                return res.status(500).send({ message: "Unable to Update" });
            }
        })

        res.status(201).send({ message: "User updated successfully" });

    } catch (e) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

router.post("/change_password", async (req, res) => {
    try {
        const user = await Users.findOne({ email: req.body.email });

        if (!user)
            return res.status(401).send({ message: "Invalid Email" });

        const validPassword = await bcrypt.compare(
            req.body.currentPassword,
            user.password
        );

        if (!validPassword)
            return res.status(401).send({ message: "Invalid Email or Password" });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.newPassword, salt);

        Users.updateOne({ email: req.body.email }, {
            password: hashPassword,
        }, (Error) => {
            if (Error) {
                return res.status(500).send({ message: "Unable to Update" });
            }
        })

        res.status(201).send({ message: "User updated successfully" });

    } catch (e) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})

router.post("/delete_profile", async (req, res) => {
    try {
        const user = await Users.findOneAndDelete({ email: req.body.email });

        res.status(200).send({message: "Profile Deleted successfully" });
    } catch (e) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});


router.post("/activate_account", async (req, res) => {
    try {
        const sentToken = req.body.token

        const user = await Users.findOne({ activationToken: sentToken, activation: false });
        if (!user)
            return res.status(422).json({ error: "Your account has been already activated" })

        user.activationToken = undefined
        user.activation = true
        user.save()
        res.status(201).send({ message: "ACCOUNT ACTIVATED!" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})


router.post("/reset_password", (req, res) => {
    crypto.randomBytes(32, (err, buffer) => {
        console.log(req.body.email)
        if (err) {
            console.log(err)
        }
        const token = buffer.toString("hex")
        Users.findOne({ email: req.body.email })
            .then(user => {
                if (!user) {
                    return res.status(422).json({ error: "User with this email is not registered" })

                }

                user.resetToken = token
                user.expireToken = Date.now() + 3600000
                var html = `<p>You requested for password reset</p> <h5>click in this <a href="http://localhost:3001/reset/?token=` + user.resetToken + `">link</a> to reset password</h5>`

                user.save().then((result) => {
                    sgMail.send({
                        to: user.email,
                        from: "serenitypk69@gmail.com",
                        subject: "password reset",
                        html: html
                    })
                    res.json({ message: "check your email" })
                })
            })
    })
})

router.post("/new_password", async (req, res) => {
    try {
        const newPassword = req.body.password
        const sentToken = req.body.token

        const user = await Users.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } });

        if (!user)
            return res.status(422).json({ error: "Try again, Session expired!" })

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(newPassword, salt);

        console.log(user)
        user.password = hashPassword
        user.resetToken = undefined
        user.expireToken = undefined
        await user.save()

        res.status(200).send({ message: "Password Successfully Updated" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})

module.exports = router;