// add.js - Add route module.
const CategoryService = require('../services/CategoryService');
var express = require('express');
var router = express.Router();

// Home page
router.get('/', async function (req, res) {
  res.send('Add home page');
});

// Add a Category :
router.post('/category', async function (req, res) {
  res.json(await CategoryService.CreateCategory(req.body));
});

module.exports = router;
