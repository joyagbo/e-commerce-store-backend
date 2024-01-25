const express=require('express');
const { createUser, userLogin, getallUser, getaUser, deleteaUser, updateaUser } = require('../controller/userControlller');
const router = express.Router();

router.post('/register', createUser);
router.post('/login',userLogin);
router.get('/all-users', getallUser);
router.get('/:id', getaUser);
router.delete('/:id', deleteaUser);
router.put('/:id', updateaUser);
module.exports = router