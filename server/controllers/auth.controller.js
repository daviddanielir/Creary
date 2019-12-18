//USER MODEL
const User = require('../models/User')

exports.signup = async (req, res, next) => {
  console.log(req.body)
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
  const user = await User.register(
    { ...req.body },
    req.body.password
  )
  res.status(201).json({ user })
}

exports.login = (req, res, next) => {
  res.status(200).json({ user: req.user })
}

exports.getUser = async (req, res) =>{
  const users= await User.find().populate("users");
  res.status(200).json({users});
};

exports.logout = (req, res, next) => {
  req.logout()
  res.clearCookie('connect.sid')
  res.status(200).json({ msg: 'Logged Out' })
}