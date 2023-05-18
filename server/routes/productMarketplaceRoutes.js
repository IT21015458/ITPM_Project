const router = require("express").Router();
const {updateProduct,deleteProduct,getProductDetails,getProducts,productInsert} = require('../controller/productMarketPlaceController');

//Product insertion
router.post("/productadd", productInsert);

//get all products
router.get("/getAllPlants", getProducts);

//get selected product
router.get("/getProduct/:id", getProductDetails);

//delete a specific Product
router.delete("/deleteProduct/:id", deleteProduct);

//upadte a specific Product
router.put("/updataProduct", updateProduct)

module.exports = router;