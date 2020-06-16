// OperatorController.js - CategoryController route module.
const CategoryService = require('../services/CategoryService');
var express = require('express');
var router = express.Router();


// Add Operator :
router.post('/', async function (req, res) {
  res.json('Hello');
});

module.exports = router;
