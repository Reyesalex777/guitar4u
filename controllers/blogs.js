const Blog = require('../models/blog');

module.exports = {
    index,
    show,
    new: newBlog,
    create,
    edit,
    deleteBlog,
    update
};

function update(req, res) {
    Blog.findOneAndUpdate({
        _id: req.params.id, userRecommending: req.user._id },
            req.body,
            {new: true},
            function(err, blog) {
                if (err || !blog) return res.redirect('/blogs');
            res.redirect('/blogs')
        })
}

function deleteBlog(req, res) {
    Blog.findOneAndDelete(
        {_id: req.params.id, userRecommending: req.user._id}, function(err) {
            res.redirect('/blogs')
        }
    )
}

function edit(req, res) {
    Blog.findOne(
        {'b._id': req.params.id},
        req.body,
        {new: true},
        function(err, blog) {
            if (err || !blog) return res.redirect('/blogs');
            res.render('blogs/edit', { title: 'edit blog', blog });
        }
    );
}

function index(req, res) {
    Blog.find({}, function (err, blogs) {
        res.render('blogs/index', { title: 'Guitar4u', blogs });
    });
};



function show(req, res) {
    Blog.findById(req.params.id, function (err, blog) {
            res.render('blogs/show', { title: 'Blog info', blog });
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
    blog.save(function (err) {
        if (err) return res.redirect('/blogs/new');
        res.redirect('/blogs');
    });
}
