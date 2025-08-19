// Service Layer Bertujuan Untuk Handle Bussines Logic
// Kenapa di Pisah? Supaya Tanggung Jawabnya Terisolate, dan Fungsinya Reusable

const { findProducts, findProductById, insertProduct, editProduct, deleteProduct } = require("./product.repository")

const getAllProducts = async () => {
    const products = await findProducts();

    return products
}

const getProductById = async (productId) => {

    const product = await findProductById(productId)

    if(!product){
        throw Error("Product Doesn't Exist")
    }

    return product
}

const createProduct = async (newProductData) => {
    const product = await insertProduct(newProductData)

    return product;
}

const deleteProductById = async (productId) => {
    if(typeof productId !== "number"){
        throw Error("ID is not a Number")
    }

    await getProductById(productId);

    await deleteProduct(productId);
    
}

const editProductById = async (productId, body) => {
    await getProductById(productId);

    const product = editProduct(productId, body)

    return product
}



module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProductById,
    editProductById
}