const path = require('path');const express = require('express');

const rootDir = require('../util/rootDir');

const router = express.Router();


router.get('/novo' , (req , res , next) => {
    res.sendFile( path.join(rootDir , 'views','novoProfessor.html') );
});

router.post('/novo', (req, res , next) => {
    res.send(req.body);
});

module.exports = router;