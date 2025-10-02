const express = require("express");
const router = express.Router();
const path = require("path");

const productModel = require("../model/productModel")

router.get("/vender", async (req, res) => {
  try {
    const products = await productModel.find();

    // Calculate total value of in-stock products
    const inStockValue = products
      .filter(product => product.quantity > 0)
      .reduce((sum, product) => sum + (product.price * product.quantity), 0);

    // Count of in-stock products
    const inStockCount = products.filter(product => product.quantity > 0).length;

    // Count of out-of-stock products
    const outOfStockCount = products.filter(product => product.quantity === 0).length;

    res.render("vender", { products, inStockValue, inStockCount, outOfStockCount });
  } catch (error) {
    console.error(error);
    res.send("Can't get products");
  }
});


router.post("/vender", async (req, res) =>{
  try {
    console.log(req.body);
    const { productName, category, price, quantity,color } = req.body;
    if(!productName || !category || !price || !quantity) {
    return res.send("All fields are required");
  }
    const newProduct = new productModel({
      productName, 
      category, 
      price, 
      quantity,
      color
    });
    await newProduct.save();
    const products = await productModel.find();
    const inStockValue = products.reduce((sum, product) =>{
      return sum + (product.price * product.quantity);
    }, 0);
    res.render("vender", {products, inStockValue, success: true});
  } catch (error) {
    console.error(error);
    res.render("Error saving product");
  }
})












module.exports = router;