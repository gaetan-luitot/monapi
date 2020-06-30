// MeanController.js - CategoryController route module.
import {MeanService} from '../services/MeanService';
var express = require('express');
var router = express.Router();

// Get Means Name :
router.get('/names', async function (req: any, res: any) {
    return res.json(await MeanService.GetAllNames());
});

// Add Mean :
router.post('/', async function (req: any, res: any) {
    return res.json(await MeanService.Create(req.body));
});

module.exports = router;
