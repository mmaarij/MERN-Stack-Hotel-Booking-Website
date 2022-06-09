var express = require('express');
var router = express.Router();
const Rooms = require('../models/Rooms')


router.get("/get_all_rooms", async (req, res) => {
    try {

        const rooms = await Rooms.find({});

        if (!rooms)
            return res.status(401).send({ message: "No Rooms Available" });

        return res.status(200).send({rooms: rooms, message: "Rooms Found" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});


router.post("/get_all_rooms_page", async (req, res) => {
    try {

        var page = parseInt(req.body.page);
        var start = (page - 1) * 3;
        const rooms = await Rooms.find({}).skip(start).limit(3);

        if (!rooms)
            return res.status(401).send({ message: "No Rooms Available" });

        return res.status(200).send({ rooms: rooms, message: "Rooms Found" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

router.post("/add_room", async (req, res) => {
    try {

        await new Rooms({
            hotelName: req.body.name,
            type: req.body.type,
            // capacity: req.body.cap,
            description: req.body.descrp,
            imgurl: req.body.imgurl,
            price: req.body.price,
            like: req.body.like,
            dislike: req.body.dislike,
            availabilityCount: req.body.count
        }).save();

        return res.status(200).send({ message: "Room Added" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});


router.post("/search", async (req, res) => {
    try {

        console.log(req.body.priceMin)
        console.log(req.body.priceMax)
        console.log(req.body.rooms)
        console.log(req.body.location)

        const rooms = await Rooms.find({

            $and: [
                { price: { $gt: req.body.priceMin, $lt: req.body.priceMax } },
                { availabilityCount: { $gt: req.body.rooms } },
                {
                    $or: [
                        { description: { $regex: req.body.location, $options: "i" } },
                        { hotelName: { $regex: req.body.location, $options: "i" } }
                    ]
                }
            ]
            

            

            
        });

        if (!rooms)
            return res.status(401).send({ message: "No Rooms Available" });

        return res.status(200).send({ rooms: rooms, message: "Rooms Found" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});




module.exports = router;
