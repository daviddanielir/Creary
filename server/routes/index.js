const router = require('express').Router()
const upload = require('../config/cloudinary')
const passport = require('passport')
const uploadCloud = require("../config/cloudinary");
const {
  signup,
  login,
  logout,
  getUser,
  addProduct,
  homeView,
} = require('../controllers/auth.controller')

router.post('/signup', upload.single('photo'), signup)
router.post('/login', passport.authenticate('local'), login)
router.get('/profile', getUser)
router.get('/logout', logout)

router.get("/addproduct", addProduct);
router.post("/addproduct", uploadCloud.single("products"));
router.get('/products', homeView)



module.exports = router



