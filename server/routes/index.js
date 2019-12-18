const express = require("express");
const router = express.Router();
const upload = require('../cloudinary/cloudinary');

const{
  createProduct,
  getProduct,
  updateProduct,
  getProducts
} = require('../controllers/productController');


// Product
router.get('/addProduct',(getProducts));
router.get('/addProduct/:id',(getProduct));
router.post('/addProduct',(createProduct));
router.patch('/addProduct/:id',(updateProduct));


//upload photos


router.post('/upload', upload.single('photo'), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
  res.status(201).json({ file: req.file, data: { ...req.body } })
})

module.exports = router;