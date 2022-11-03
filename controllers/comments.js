const Blog = require('../models/blog');

module.exports = {
  create,
  
};

function create(req, res) {
  req.body.user = req.user._id;
  console.log(req.user);
  req.body.userName = req.user.name;
  req.body.userAvatar = req.body.userAvatar
  Blog.findById(req.params.id, function(err, blog) {
    blog.comments.push(req.body)
    blog.save(function(err) {
      res.redirect(`/blogs/${blog._id}`);
      
    });
  });
}