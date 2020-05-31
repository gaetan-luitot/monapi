// add.js - Add route module.
const CategoryService = require('../services/CategoryService');
var express = require('express');
var router = express.Router();

// Check if a Category has this name :
router.post('/check_name', async function (req, res) {
  res.json(await CategoryService.CheckNameExist(req.body));
});

module.exports = router;
