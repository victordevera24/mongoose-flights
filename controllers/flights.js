const Flight = require('../models/flight.js');

function index(req, res){
    Flight.find({},function(err,flights){
        console.log("in the show",flights)
        res.render('flights/index', {flights});
    })
}

function newFlight(req, res){
    res.render('flights/new');
}

function create(req, res){
    const flight = new Flight(req.body);
    req.body.flightNo = Number(req.body.flightNo)
    console.log('in creat', req.body)
    console.log('this is flight', flight)
    flight.save(function(err){
        if(err) return res.render('flights/new');
        res.redirect('/flights');
    })
};


module.exports = {
    index,
    new : newFlight,
    create
}