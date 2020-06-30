// FlowController.js - FlowController route module.
import {FlowService} from '../services/FlowService';
var express = require('express');
var router = express.Router();


// Add Flow :
router.post('/', async function (req: any, res: any) {
    return res.json(await FlowService.Create(req.body));
});

module.exports = router;
