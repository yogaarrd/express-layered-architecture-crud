const express = require("express");
const dotenv = require("dotenv");

const app = express()

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json())

app.get("/api", (req, res) =>{
    res.send("Hello Yoga Keren")
})

const productController = require("./product/product.controller");

// Layered Architecture
// Main -> Controller -> Service -> Repository
//Prefik Ke Product Controller jadi di controller sudah tidak perlu menggunakan "/products" hanya "/" dst
app.use('/products', productController) 

app.listen(PORT, () =>{
    console.log("Express API Running in Port : " + PORT)
})