const Product = require("../models/Products");

exports.createProduct = async (req, res) => {
    const {  productname, photo, description } = req.body;
    const product = await Product.create({ 
      productname, 
        photo,
        description
    });
  
    res.status(201).json(product);
  };

exports.getProducts = async (req,res) => {
    const products = await Product.find().populate("products");
    res.status(200).json({products});
};

exports.getProduct = async (req, res) => {
    const {id} = res.params;
    const product = await Product.findById(id).populate("products");
    res.status(200).json(product);
};

exports.updateProduct = async (req, res) =>{
    const  { productname, photo, description} = req.body;
    const {id} = req.params;
    const product = Product.findByIdAndUpdate (id, { productname, photo, description})
    res.status(200).json(product);
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({mesaje: "Product eleiminado"})
}