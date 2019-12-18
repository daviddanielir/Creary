const router = require('express').Router()
const passport = require('passport')
const upload = require('../config/Cloudinary')

const {
  signup,
  login,
  logout,
  getUser
} = require('../controllers/auth.controller')

router.post('/signup', upload.single('photo'), signup)
router.post('/login', passport.authenticate('local'), login)
router.get('/profile', getUser)
router.get('/logout', logout)



module.exports = router



