const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    profilePicture: String,
    googleId: String,
    facebookId: String,
    resetToken: String,
    expireToken: Date,
    activationToken: String,
    activation: Boolean
})

UserSchema.plugin(findOrCreate);
const Users = new mongoose.model("Users", UserSchema)

module.exports = Users