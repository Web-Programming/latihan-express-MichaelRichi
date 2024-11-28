const express = require('express');
const router = express.Router();
const registerController = require('../controllers/controllerRegister');
// Route untuk menyimpan data registrasi
router.post('/register', registerController.insert);
module.exports = router;