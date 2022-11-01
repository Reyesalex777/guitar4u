const Gear = require('../models/gear');

module.exports = {
  index,
};

function index(req, res) {
    res.render('gears/index', { title: 'GEAR' });
}