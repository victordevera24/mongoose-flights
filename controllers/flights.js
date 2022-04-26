const Flight = require('../models/flight.js');
const Ticket = require('../models/ticket.js')

function index(req, res){
    Flight.find({},function(err,flights){
        res.render('flights/index', {flights});
    })
}

function newFlight(req, res){
    res.render('flights/new');
}

function create(req, res){
    if (req.body.departs === '') delete req.body.departs;
    const flight = new Flight(req.body)
    console.log('in create', flight)
    flight.save(function(err){
        if(err) return res.render('flights/new');
        res.redirect('/flights')
    })
};

function show(req, res){
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {flight, tickets})
        })
    })
}

module.exports = {
    index,
    new : newFlight,
    create,
    show
}