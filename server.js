// Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config();
const ProductModel = require("./model/productModel");


//import routes
const venderRoutes = require("./routes/venderRoutes");

//installations
const app = express();
const port = 4000;


//setting up mon
mongoose.connect(process.env.MONGODB_URL, {
  //  useNewUrlParser: true,
  //  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () =>{
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// setting view engine
app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'));

//using express
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); 

//Routes
app.use("/",venderRoutes);


app.use((req, res) => {
  res.status(404).send(`Oops! Route not found.`);
});


app.listen(port, () => console.log(`listening on port ${port}`));
