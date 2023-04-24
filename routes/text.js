const express = require('express'); //import express

const router  = express.Router(); 
const textGenerator = require('../controllers/text/textGenerator'); 

router.post('/generate-text', textGenerator);

module.exports = router;