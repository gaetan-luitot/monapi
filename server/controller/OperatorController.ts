// OperatorController.js - CategoryController route module.
import {OperatorService} from '../services/OperatorService';
var express = require('express');
var router = express.Router();


// Add Operator :
router.post('/', async function (req: any, res: any) {
    return res.json(await OperatorService.CreateOperator(req.body));
});

module.exports = router;
