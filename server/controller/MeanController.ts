// MeanController.js - CategoryController route module.
import {MeanService} from '../services/MeanService';
var express = require('express');
var router = express.Router();

// Add Mean :
router.post('/', async function (req: any, res: any) {
    return res.json(await MeanService.Create(req.body));
});

module.exports = router;
