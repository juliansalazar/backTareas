const express = require('express');
const router = express.Router();
const { login, register, data, logout } = require('../controllers/usersController');
const {protect} = require('../middlewares/authMiddleware');

router.post('/login', login);
router.post('/register', register);
router.get('/data', protect, data);
router.post('/logout', protect, logout);

module.exports = router

