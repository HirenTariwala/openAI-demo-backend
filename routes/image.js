const express = require('express'); 

const router  = express.Router(); 
const imageGenerator = require('../controllers/image/imageGenerator'); 
router.post('/generate-image', imageGenerator);

module.exports = router;