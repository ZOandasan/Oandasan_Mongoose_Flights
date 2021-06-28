const ticketSchema = new Schema({
    seat: { type: String, match: /[A-F][1-9]\d?/ },
    price: { type: Number, min: 0 },
    flightID: [{type: Number, default: flightSchema.flightNo }],
});