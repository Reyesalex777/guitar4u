const Gear = require('../models/gear');

module.exports = {
  index,
};

function index(req, res) {
    res.render('gears/gearidx', { title: 'GEAR' });
}