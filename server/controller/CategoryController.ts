// CategoryController.js - CategoryController route module.
import { CategoryService } from '../services/CategoryService';
import { IOut } from '../interfaces/IOut';
var express = require('express');
var router = express.Router();


// Get All Categories :
router.get('/', async function (req: any, res: any) {
    return res.json(await CategoryService.GetAllCategories());
});

// Add Category :
router.post('/', async function (req: any, res: any) {
    return res.json(await CategoryService.CreateCategory(req.body));
});

// Check if a Category has this name :
router.post('/check_name', async function (req: any, res: any) {
    return res.json(await CategoryService.CheckNameExist(req.body));
});

module.exports = router;
