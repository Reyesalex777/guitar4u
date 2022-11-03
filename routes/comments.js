var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');
var ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */

// GET /blogs (displaying all gear blogs) 
router.post('/blogs/:id/comments', ensureLoggedIn, commentsCtrl.create)
// router.get('/new', blogsCtrl.new);
// router.post('/', blogsCtrl.create);
// router.get('/:id/edit', blogsCtrl.edit);

module.exports = router;