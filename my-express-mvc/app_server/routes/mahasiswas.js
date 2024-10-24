const express = require('express');
const router = express.Router();
const mahasiswaController = require("../controllers/controllerMahasiswa");

//Fungsi dan Rute Index Kita Gunakan Untuk Memanggil Semua Data Dalam Database MongoDB

router.get("/mahasiswa", mahasiswaController.Index);
router.post("/insert", mahasiswaController.insert); //insert mahasiswa 
// router.patch("/mahasiswa/update/:id", mhsController.update); //mengupdate mahasiswa 


// router.get("/mahasiswa/show/:id", mhsController.show); //show detail mahasiswa by id 
// router.delete("/delete/:id", mhsController.destroy); //delete mahasiswa by id

module.exports = router;