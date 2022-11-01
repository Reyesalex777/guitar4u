const Blog = require('../models/blog');

module.exports = {
  index,
};

function index(req, res) {
    res.render('blogs/index', { title: 'BLOGS' });
}