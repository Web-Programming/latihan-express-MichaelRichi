var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/paketwisata', function(req, res, next) {
  let listpaketwisata = [
    {'nama' : 'Wisata Pulau Kemaro', 'harga' : '500.000'},
    {'nama' : 'Wisata Punti Kayu', 'harga' : '250.000'},
    {'nama' : 'Wisata Jakabaring', 'harga' : '100.000'}
  ]
  res.render('paketwisata', { 
    title: 'Paket Wisata',
    listpaketwisata: listpaketwisata
  });
});

router.get('/orderpaket', function(req, res, next) {
  res.render('orderpaket', { title: 'Form Pemesanan Tiket' });
});

router.post('/orderdetail', (req, res) => {
  const { nama, email, paket, tanggal } = req.body;
  res.render('orderdetail', { nama, email, paket, tanggal });
});


module.exports = router;
