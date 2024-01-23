const express=require('express');
const { createUser } = require('../controller/userControlller');
const router = express.Router();

router.post('/register', createUser);

module.exports = router