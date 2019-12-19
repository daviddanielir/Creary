const router = require('express').Router()
const upload = require('../config/Cloudinary')

const{
  createService,
  getService,
  updateService,
  getServices
} = require('../controllers/serviceController');


// Product
router.get('/services', getServices)
router.get('/services/:id', getService)
router.post('/services',upload.single('photo'), createService)
router.patch('/services/:id', updateService)


//upload photos


router.post('/upload', upload.single('photo'), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
  // res.header('Access-Control-Allow-Origin', 'https://creary.netlify.com')
  res.status(201).json({ file: req.file, data: { ...req.body } })
})

module.exports = router;