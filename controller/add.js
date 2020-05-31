// add.js - Add route module.

var express = require('express');
var router = express.Router();

// Home page
router.get('/', function (req, res) {
  res.send('Add home page');
})

// Add a Category :
router.get('/category', function (req, res) {
  res.json({
        message: 'Behold The MEVN Stack!'
    });
})

module.exports = router;
