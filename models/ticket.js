const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: { type: String, required: true, unique: true, match: /[A-F][1-9]\d?/ },
    price: { type: Number, min: 0 },
    flightID: {type: Schema.Types.ObjectId},
    
});

module.exports = mongoose.model('Ticket', ticketSchema);