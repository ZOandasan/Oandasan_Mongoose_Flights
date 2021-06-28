var Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    new: newFlight,
    create,
    index,
    show,
    edit,
    update,
    delete: deleteFlight,
};

function index(req, res){
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
      });
}


function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flightID: req.params.id}, function(err, tickets){
            res.render('flights/show', { title: 'Flight Details', flight, tickets });
        });
      });
    
}

function newFlight(req, res){
    res.render('flights/new', { title: 'New Flight' });
}

function create(req, res){
    // delete any properties with empty strings so that default values will work
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function(err){
        res.redirect('/flights');
        if (err) return;
    })
}

//Create Function Edit
function edit (req, res) {
    const flight = Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/edit', { title: 'Flight Details', flight });
    });
}

/*
//Create Function Update
function update (req, res) {
    const flight_ID = req.params.id;
    const flight = flights.find(flight => flight.flight_ID === flight_ID);
    Object.assign(flight, req.body);
    res/redirect(`/flights/${req.params.id}`)
}
*/

function update(req, res){
    Flight.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        function(err, flight) {
          if (err || !flight) return res.redirect('/flight');
          res.redirect(`flight/${flight._id}`);
        }
      );
}

function deleteFlight(req, res){
    Flight.findOneAndDelete(
        {_id: req.params.id}, function(err){
            res.redirect('/flights');
        }
    );
}