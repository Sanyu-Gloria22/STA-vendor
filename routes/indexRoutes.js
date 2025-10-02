// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
// const Product = require("../models/productModel"); // import your product model



// //  Add multer here
// // const multer = require("multer");
// // const path = require("path");

// // Configure storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const dir = "public/uploads";
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir, { recursive: true }); // auto-create folder
//     }
//     cb(null, dir);
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// // get request to show page with products 
// router.get("/",  async (req, res) =>{
//     try {
//         const products = await Product.find();  //get all products
//           // Calculate In stock total (price × quantity)
//     const inStockValue = products.reduce((sum, product) => {
//       return sum + (product.price * product.quantity);
//     }, 0);
//          res.render("index", {products, inStockValue});             //pass products topug
//     } catch (error) {
//          console.error(error);
//         res.send("Error fetching products");
//     }
   
// })

// // POST request - add new product
// router.post("/", upload.single("image"), async (req, res) =>{
//    try {
//           console.log(req.file);
//   console.log(req.body);
//         const { productName, category, price, quantity, color } = req.body;
//         // const imagePath = req.file ? "/uploads/" + req.file.filename : null;
    
//         // Form validation
//         if (!productName || !category || !price || !quantity || !color) {
//             return res.send("All fields are required"); // you can improve by showing error on page
//         }

//             // Save image path if file exists
//     const imagePath = req.file ? "/uploads/" + req.file.filename : null;

//         // Create a new product
//         const newProduct = new Product({
//             productName,
//             category,
//             price,
//             quantity,
//             color,
//             image : imagePath
//         });

//         await newProduct.save(); // save to database

//         // Get updated product list
//         const products = await Product.find();
//         const inStockValue =  products.reduce((sum, product) => {
//          return sum + (product.price * product.quantity);
//     }, 0);
//         res.render("index", { products, inStockValue, success: true });
//     } catch (error) {
//         console.error(error);
//         res.send("Error saving product");
//     }
    
// })




// module.exports = router;