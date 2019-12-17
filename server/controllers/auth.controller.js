const Product = require("../models/Products");
const User = require('../models/User')

exports.signup = async (req, res, next) => {
  console.log(req.body)
  // const file = req.file.secure_url
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
  // res.header('Access-Control-Allow-Origin', 'creary.netlify.com')
  const user = await User.register(
    { ...req.body },
    req.body.password
  )
  return res.status(201).json({ user })
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

/// AddPhoto MODEL

// exports.addPhotoView = (req, res) => {
//   const products = await Products.findById(req.product._id)
//   res.status(200).json({ products })
// }

exports.addProduct = async (req, res) => {
  const { nameproduct, descriptionproduct } = req.body;
  const { secure_url } = req.file;
 
  await Product.create({
    nameproduct,
    descriptionproduct,
    imgPath: secure_url,
  });

  res.redirect("/product/reviews");
};

exports.homeView = async (req, res) => {
  res.render("reviews", { photos });
};

/// TERMINA ADDPHOTO MODEL


