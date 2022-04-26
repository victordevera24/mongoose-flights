const Ticket = require('../models/ticket');
const Flight = require('../models/flight')

function newTicket(req,res){
    res.render('tickets/new', {flightId : req.params.id})
}

function create(req,res){
    Ticket.create(req.body, function(err, ticket){
        console.log('in create', ticket)
        res.redirect('/flights/'+req.body.flight)
    })
}
module.exports = {
    new: newTicket,
    create
}