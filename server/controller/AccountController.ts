// AccountController.js - AccountController route module.
import {AccountService} from '../services/AccountService';
var express = require('express');
var router = express.Router();

// Add Account :
router.post('/', async function (req: any, res: any) {
    const result = await AccountService.Create(req.body);
    return res.status(result.code).json(result);
});

// Get All Accounts Name :
router.get('/names', async function (req: any, res: any) {
    const result = await AccountService.GetAllNames();
    return res.status(result.code).json(result);
});

module.exports = router;
