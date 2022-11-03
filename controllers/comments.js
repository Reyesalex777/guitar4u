const Comment = require('../models/comment');

module.exports = {
  index,
};

function index(req, res) {
    res.render('comments', { title: 'Comments' });
}