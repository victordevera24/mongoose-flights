var express = require('express');
var router = express.Router();

const flightCtrl = require('../controllers/flights')

router.get('/new', flightCtrl.new)

router.post('/', flightCtrl.create)

router.get('/', flightCtrl.index)

router.get('/:id', flightCtrl.show)

module.exports = router;