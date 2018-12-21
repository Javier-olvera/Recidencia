const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.json({
        status: 'API works'
    });
});

module.exports = router;

//definir operaciones atravez de la URLs que vamos a dar a nuestro servidor