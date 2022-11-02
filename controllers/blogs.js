const Blog = require('../models/blog');

module.exports = {
  index,
  new: newBlog,
  create
};

function index(req, res) {
    Blog.find({}, function(err, blogs) {
    res.render('blogs/index', { title: 'BLOGS', blogs });
    });
};

function newBlog(req, res) {
    res.render('blogs/new', { title: 'New Blog' });
}

function create(req, res) {
    req.body.userId = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const blog = new Blog(req.body);
    blog.save(function(err) {
        if (err) return res.redirect('/blogs/new');
        res.redirect(`/blogs/${blog._id}`)
    })
}