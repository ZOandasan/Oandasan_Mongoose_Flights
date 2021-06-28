const Flight = require('../models/flight');

module.exports = {
    create,
    delete: deleteDestination,
}

function create(req, res){
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body);
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

function deleteDestination(req, res){
    // Note the cool "dot" syntax to query on the property of a subdoc
    Flight.findOne(
        {'destinations._id': req.params.id},
        function(err, flight) {
        if (!flight || err) return res.redirect(`/flights/${flight._id}`);
        // Remove the subdoc (https://mongoosejs.com/docs/subdocs.html)
        flight.destinations.remove(req.params.id);
        // Save the updated book
        flight.save(function(err) {
            // Redirect back to the book's show view
            res.redirect(`/flights/${flight._id}`);
        });
        }
    );
}