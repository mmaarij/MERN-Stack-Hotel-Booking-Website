const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    hotelName: String,
    type: String,
    // capacity: Number,
    description: String,
    imgurl: String,
    price: Number,
    like: Number,
    dislike: Number,
    availabilityCount: Number
})


const Rooms = new mongoose.model("Rooms", RoomSchema)
module.exports = Rooms
