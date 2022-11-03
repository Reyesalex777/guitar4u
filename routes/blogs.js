var express = require('express');
var router = express.Router();
var blogsCtrl = require('../controllers/blogs');
/* GET home page. */

// GET /blogs (displaying all music blogs) 
router.get('/', blogsCtrl.index);
router.get('/new', blogsCtrl.new);
router.post('/', blogsCtrl.create);
router.get('/:id', blogsCtrl.show);
router.get('/:id/edit', /*ensureLoggedIn,*/ blogsCtrl.edit);
router.delete('/:id', blogsCtrl.deleteBlog);
router.put('/:id', blogsCtrl.update);


module.exports = router;
