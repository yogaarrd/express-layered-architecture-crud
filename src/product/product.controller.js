// Layer Untuk Handle Request Dan Response
// Biasanya Juga Handle Validasi Body

const express = require('express');

const router = express.Router();

const { getAllProducts, getProductById, createProduct, deleteProductById, editProductById} = require('./product.service');


router.get("/", async (req, res) => {
    try {
        const products = await getAllProducts();
    
        res.send(products)
    } catch (error) {
        res.send(error.message)  
    }
})

router.get("/:id", async (req, res) => {
    try {
        const productId = parseInt(req.params.id)
        const product = await getProductById(productId)
    
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send(error.message)
    }

})

router.post("/", async (req, res) => {
    try {
        const newProductData = req.body;
        const product = await createProduct(newProductData);
    
        res.send({
            data : product,
            message : "Create Product Success",
            code : 201
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        await deleteProductById(productId)
    
        res.send("Product Deleted")
    } catch (error) {
        res.status(400).send(error.message) 
    }
})

router.put("/:id", async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const newReplaceProductData = req.body;

        if(!(newReplaceProductData.name && newReplaceProductData.description && newReplaceProductData.price && newReplaceProductData.image)){
            return res.status(400).send("Some Fields Are Missing")
        }
    
        const product = await editProductById(productId, newReplaceProductData)
    
        res.send({
            data: product,
            message: "Updated Data Succecsfully",
            code: 200
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
} )

router.patch("/:id", async (req, res) => {
    try {
        const productId = parseInt(req.params.id)
        const requestBody = req.body
        const product = await editProductById(productId, requestBody)
    
        res.send({
            data: product,
            message: "Updated Data Succecsfully",
            code: 200
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
} )


module.exports = router;