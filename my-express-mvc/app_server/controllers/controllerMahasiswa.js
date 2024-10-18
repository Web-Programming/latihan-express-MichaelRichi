const Mahasiswa = require("../models/mahasiswa");

exports.Index = async (req,res) => {
    try {
        const mahasiswas = await Mahasiswa.find({});
        res.render(200).json(mahasiswas);
        if(!mahasiswas){
            res.status(404).json({message : "Collection is Empty"}) //Error 404 untuk memberitahukan error nya berupa collectionnya kosong 
        }
    } catch (error) {
        res.status(500).json({message : "Error retrieving users", error})
    }
}