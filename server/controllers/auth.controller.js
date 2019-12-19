//USER MODEL
const User = require('../models/User')

exports.signup = async (req, res, next) => {
  console.log(req.body)
  const  {secure_url} = req.file;
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
  // res.header('Access-Control-Allow-Origin', 'https://creary.netlify.com')
  const user = await User.register(
    { ...req.body, file: secure_url },
    req.body.password
  )
  res.status(201).json({ user })
}

exports.login = (req, res, next) => {
  res.status(200).json({ user: req.user })
}

exports.getUser = async (req, res, next) => {
  const user = await User.findById(req.user._id)
  res.status(200).json({ user })
}

exports.logout = (req, res, next) => {
  req.logout()
  res.clearCookie('connect.sid')
  res.status(200).json({ msg: 'Logged Out' })
}