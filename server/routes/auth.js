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


router.post('/upload', upload.single('photo'), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
  // res.header('Access-Control-Allow-Origin', 'https://creary.netlify.com')
  res.status(201).json({ file: req.file, data: { ...req.body } })
})

module.exports = router



