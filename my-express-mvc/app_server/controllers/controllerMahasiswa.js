const Mahasiswa = require("../models/mahasiswa");

// list data mahasiswa
// const Index = async(req,res) => {
//     try {
//         const mahasiswas = await Mahasiswa.find({});
//         res.render(200).json(mahasiswas);
//         if(!mahasiswas){
//             res.status(404).json({message : "Collection is Empty"}) //Error 404 untuk memberitahukan error nya berupa collectionnya kosong 
//         };
//     } catch (error) {
//         res.status(500).json({message : "Error retrieving users", error});
//     };
// };

const Index = (req, res, next) => {
    Mahasiswa.find({}, { __v: 0 })
      .then((mhs) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: mhs
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

const insert = (req, res, next) => {
    const mhs = new Mahasiswa({
      nama: req.body.nama,
      npm: req.body.npm,
      email: req.body.email,
      tanggal_lahir: req.body.tanggal_lahir,
      aktif: true
    });
  
    mhs
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

module.exports = { Index, insert }