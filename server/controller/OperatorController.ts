// OperatorController.js - CategoryController route module.
import {OperatorService} from '../services/OperatorService';
var express = require('express');
var router = express.Router();

// Get Operators Name :
router.get('/names', async function (req: any, res: any) {
    return res.json(await OperatorService.GetAllNames());
});

// Add Operator :
router.post('/', async function (req: any, res: any) {
    return res.json(await OperatorService.Create(req.body));
});



module.exports = router;
