const Products = require("../models/Products");

exports.createProduct = async (req, res) => {
    console.log(req.body)
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
  const product = await Products.create(
    { ...req.body },
  )
  res.status(201).json({ product })
};


exports.getProducts = async (req,res) => {
    const products = await Product.find().populate("products");
    res.status(200).json({products});
};

exports.getProduct = async (req, res) => {
    const {id} = res.params;
    const product = await Product.findById(id).populate("products");
    res.status(200).json({product});
};

exports.updateProduct = async (req, res) =>{
    const  { nameproduct, photo, descriptionproduct} = req.body;
    const {id} = req.params;
    const product = Product.findByIdAndUpdate (id, { nameproduct, photo, descriptionproduct})
    res.status(200).json({product});
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({mesaje: "Product eleiminado"})
}