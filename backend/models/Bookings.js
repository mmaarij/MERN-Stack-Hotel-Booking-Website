const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    userID: String,
    roomID: String,
    bookingDate: Date,
    startDate: Date,
    endDate: Date,
    price: Number,
    roomCount: Number
})

const Bookings = new mongoose.model("Bookings", BookingSchema)

module.exports = Bookings