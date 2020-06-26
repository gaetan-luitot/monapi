// CategoryController.js - CategoryController route module.
import { CategoryService } from '../services/CategoryService';
import { IOut } from '../dtos/IOut';
var express = require('express');
var router = express.Router();


// Get All Categories :
router.get('/names', async function (req: any, res: any) {
    return res.json(await CategoryService.GetAllNames());
});

// Add Category :
router.post('/', async function (req: any, res: any) {
    return res.json(await CategoryService.Create(req.body));
});

module.exports = router;
