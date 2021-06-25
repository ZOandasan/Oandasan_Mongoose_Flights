var express = require('express');
const flights = require('../controllers/flights');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);
//Route Edit
router.get('/:id/edit', flightsCtrl.edit);
//Route Update
router.put('/:id', flightsCtrl.update);

module.exports = router;
