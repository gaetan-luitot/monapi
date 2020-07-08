// FlowController.js - FlowController route module.
import {FlowService} from '../services/FlowService';
var express = require('express');
var router = express.Router();


// Add Flow :
router.post('/', async function (req: any, res: any) {
    return res.json(await FlowService.Create(req.body));
});

// Get Years :
router.get('/:account/years', async function (req: any, res: any) {
    return res.json(await FlowService.GetYearsForAccount(req.params));
});

// Get Flow By Month From Year :
router.get('/:account/:year', async function (req: any, res: any) {
    return res.json(await FlowService.GetMonthsFromYear(req.params));
});

module.exports = router;
