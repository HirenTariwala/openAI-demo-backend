const express = require('express'); 

const router  = express.Router(); 
const techAndFrameworkList = require('../controllers/techandframework/techAndframework'); 
router.get('/techAndFrameworkList', techAndFrameworkList);

module.exports = router;