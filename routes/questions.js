const express = require('express'); 

const router  = express.Router(); 
const questions = require('../controllers/questions');
 
router.get('/:id', questions);

module.exports = router;