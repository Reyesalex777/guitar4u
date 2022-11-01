var express = require('express');
var router = express.Router();
let gearsCtrl = require('../controllers/gears');
/* GET home page. */

// GET /blogs (displaying all gear blogs) 
router.get('/', gearsCtrl.index);

module.exports = router;