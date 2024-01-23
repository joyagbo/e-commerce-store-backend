const express=require('express');
const { createUser, userLogin } = require('../controller/userControlller');
const router = express.Router();

router.post('/register', createUser);
router.post('/login',userLogin);

module.exports = router