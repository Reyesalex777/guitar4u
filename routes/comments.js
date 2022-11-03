var express = require('express');
var router = express.Router();
let commentsCtrl = require('../controllers/comments');
/* GET home page. */

// GET /blogs (displaying all gear blogs) 
router.get('/', commentsCtrl.index);


module.exports = router;