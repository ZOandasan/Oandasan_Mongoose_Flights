const Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    create,
}

function create(req, res){
    req.body.flightID = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`);
    });
}