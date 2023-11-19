const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users.cjs');
const ensureLoggedIn = require('../../config/ensureLoggedIn.cjs')

// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.logIn)
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;