// const express = require('express');
// const router  = express.Router();


// const Products = require('../models/Sellers.js/index.js');

// router.get("/AddProduct", (req, res, next) => {

//     Products
//         .find().populate("creator")
//         .then((data) => {
//             res.render("/products",{data});
//         })
//         .catch((err) => {
//             next();
//             console.log(err);
//         })
// })

// router.get("/products/:id", (req, res, next) => {

//     let { id } = req.params;
//     Products
    
//     .findById(id).populate("creator")
//     .then((data) => {
//             res.render("products/show",data);
//             console.log(data)

    
//         })
//         .catch((err) => {
//             next();
//             console.log(err);
//         })
// })


// router.get("/new-products", (req, res, next) => {
//     res.render("products/new");

// })

// router.post("/products", (req, res, next) => {
//     const creator = req.user._id
//     const product = {creator, ...req.body}
//     Products
//         .create (product)
//         .then(product => {
//             res.redirect("/products");

//         })
//         .catch((err) => {
//             res.render("products/new");
//             console.log(err);
//         })
// })

// router.get("/products/:id/delete", (req, res, next) => {
//     let { id } = req.params;
//     Products
//         .findByIdAndDelete(id)
//         .then(() => {
//             res.redirect("/products");
//         })
//         .catch((err) => {
//             next();
//             console.log(err);
//         })
// })

// router.get("/products/edit/:id/", (req, res, next) => {
//     let { id } = req.params;
//     Products
//     .findById(id).populate("creator")
//     .then(() => {
//         res.render("products/edit", {id});
//     })
//     .catch((err) => {
//         next();
//         console.log(err);
//     })
// })

// router.post("/products/edit/:id", (req, res, next) => {
//     let { id } = req.params;
//     Products
//         .findByIdAndUpdate(id, req.body)
//         .then((product) => {
//             res.status(200).json({product});
//         })
//         .catch((err) => {
//             res.status(500).json({err})
//             console.log(err);
//         })
// })



// module.exports = router;