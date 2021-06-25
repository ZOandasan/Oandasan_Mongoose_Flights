const Flight = require('../models/flight');

module.exports = {
    create,
}

function create(req, res){
    // delete any properties with empty strings so that default values will work
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function(err){
        if (err) return;
        res.redirect('/flights');
    })

    //Flight.findById
}