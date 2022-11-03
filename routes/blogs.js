var express = require('express');
var router = express.Router();
var blogsCtrl = require('../controllers/blogs');
/* GET home page. */

// GET /blogs (displaying all music blogs) 
router.get('/', blogsCtrl.index);
router.get('/new', blogsCtrl.new);
router.post('/', blogsCtrl.create);
router.get('/', blogsCtrl.show);


module.exports = router;
