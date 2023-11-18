const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users.cjs');

// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.logIn)

module.exports = router;