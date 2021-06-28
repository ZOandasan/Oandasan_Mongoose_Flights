const Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    create,
}

function create(req, res){
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight._id}, function(err, ticket) {
            flight.ticket.push(req.body);
            flight.save(function(err){
                res.redirect(`/flights/${flight._id}`);
            });
        });
    });
}