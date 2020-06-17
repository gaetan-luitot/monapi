// OperatorController.js - CategoryController route module.
import {CategoryService} from '../services/CategoryService';
var express = require('express');
var router = express.Router();


// Add Operator :
router.post('/', async function (req: any, res: any) {
  res.json('Hello');
});

module.exports = router;
