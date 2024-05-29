const express = require('express');
const router = express.Router();
const { login, register, data, logout } = require('../controllers/usersController');

router.post('/login', login);
router.post('/register', register);
router.get('/data', register);
//logout 

router.post('/logout', logout);

module.exports = router

