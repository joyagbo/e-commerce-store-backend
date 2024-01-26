const express= require('express');
const { createUser, userLogin, getallUser, getaUser, deleteaUser, updateaUser } = require('../controller/userController');
const {authMiddleware, isAdmin} = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', createUser);
router.post('/login',userLogin);
router.get('/all-users', getallUser);
router.get('/:id', authMiddleware,isAdmin, getaUser);
router.delete('/:id', deleteaUser);
router.put('/:edit-user', authMiddleware, updateaUser);
module.exports = router;