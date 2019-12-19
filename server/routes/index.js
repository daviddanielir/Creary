const router = require('express').Router()
const upload = require('../config/Cloudinary')

const{
  createProduct,
  getProduct,
  updateProduct,
  getProducts
} = require('../controllers/productController');


// Product
router.get('/products', getProducts)
router.get('/products/:id', getProduct)
router.post('/products',upload.single('photo'), createProduct)
router.patch('/products/:id', updateProduct)


//upload photos


router.post('/upload', upload.single('photo'), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
  // res.header('Access-Control-Allow-Origin', 'https://creary.netlify.com')
  res.status(201).json({ file: req.file, data: { ...req.body } })
})

module.exports = router;