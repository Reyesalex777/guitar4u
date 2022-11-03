const Blog = require('../models/blog');

module.exports = {
  index,
  show,
  new: newBlog,
  create
};

function index(req, res) {
    Blog.find({}, function(err, blogs) {
    res.render('blogs/index', { title: 'Guitar4u', blogs });
    });
};



function show(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
        Blog.find({blog: blog._id}, function(err, blog) {
        res.render('blogs/show', { title: 'Blog info', blog });
    })
    })
}

function newBlog(req, res) {
    res.render('blogs/new', { title: 'New Blog' });
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const blog = new Blog(req.body);
    blog.save(function(err) {
        if (err) return res.redirect('/blogs/new');
        res.redirect('/blogs');
    });
}
