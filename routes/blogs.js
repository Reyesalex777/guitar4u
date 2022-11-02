var express = require('express');
var router = express.Router();
let blogCtrl = require('../controllers/blogs');
/* GET home page. */

// GET /blogs (displaying all music blogs) 
router.get('/', blogCtrl.index);
router.get('/new', blogCtrl.new);
router.post('/', blogCtrl.create);

module.exports = router;
