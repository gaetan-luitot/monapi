// AccountController.js - CategoryController route module.
import {AccountService} from '../services/AccountService';
var express = require('express');
var router = express.Router();

// Add Account :
router.post('/', async function (req: any, res: any) {
    return res.json(await AccountService.Create(req.body));
});

module.exports = router;
