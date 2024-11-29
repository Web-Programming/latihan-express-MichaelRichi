const express = require("express");
const router = express.Router();
const registerController = require("../controllers/controllerRegister");
// Route untuk menyimpan data registrasi
router.get("/", registerController.Index);
router.post("/register", registerController.Insert);
module.exports = router;