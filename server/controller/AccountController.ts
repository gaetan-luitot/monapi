// AccountController.js - AccountController route module.
import {AccountService} from '../services/AccountService';
var express = require('express');
var router = express.Router();

// Get All Accounts :
router.get('/', async function (req: any, res: any) {
    const result = await AccountService.GetAll();
    return res.status(result.code).json(result);
});

// Get All Accounts Name :
router.get('/names', async function (req: any, res: any) {
    const result = await AccountService.GetAllNames();
    return res.status(result.code).json(result);
});

// Get Account Name :
router.get('/:account_id/name', async function (req: any, res: any) {
    const result = await AccountService.GetName(req.params);
    return res.status(result.code).json(result);
});

// Add Account :
router.post('/', async function (req: any, res: any) {
    const result = await AccountService.Create(req.body);
    return res.status(result.code).json(result);
});

module.exports = router;
