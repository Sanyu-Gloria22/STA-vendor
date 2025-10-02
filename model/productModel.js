const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName:{
    type:String,
    required:true,
    trim:true
  },
  category:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true
  },
  quantity:{
    type:Number,
    required:true,
  },
  color:{
    type:String,
    required:false
  },
  image:{
    type:String,
    required:false
  },
});




module.exports = mongoose.model("productModel", productSchema )