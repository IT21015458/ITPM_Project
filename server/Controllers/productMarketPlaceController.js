const productMarketplaceModel = require("../models/productMarketplaceModel");

//insert Product to marketplace
const productInsert = async(req, res) =>{
    const{
        productName,
        productCategory,
        productPrice,
        sellerContactNumber,
        productLocation,
        productDescription
    } = req.body;

    const ProductItem = req.files.file;
    const ProductNameStrore = new Date().getTime();
    await ProductItem.mv("Assets/Product/" + `${ProductNameStrore}.jpg`,(err)=>{
        console.log("This is a file error"+err);
    });
    console.log("file name is " + ProductNameStrore);

    try{
        const products = new productMarketplaceModel({
            productName,
            productCategory,
            productPrice,
            sellerContactNumber,
            productLocation,
            productDescription,
            productImage: `${ProductNameStrore}.jpg`
        });
        return await products
        .save()
        .then((value)=>{
            return res.status(201).json({ID: value._id});
        }).catch((err)=>{
            return res.status(500).json({err});
        });
    }catch(error){
        console.log("Error",error);
        res.status(400).json({error: error.message});
    }
};

//get all Products
const getProducts = async (req, res) => {
    try {
        const products = await productMarketplaceModel.find();
        return res.status(200).json(products);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message })
    }
};

//get spesific Product
const getProductDetails = async (req, res) => {
    try {
        const ID = req.params.id;
        const plant = await productMarketplaceModel.find({ _id: ID });

        res.status(200).send({ status: "Product Details fetched", PlantDetails: plant });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
};

//delete a Product
const deleteProduct = async (req, res) => {
    const id = req.params.id;
    await productMarketplaceModel.findByIdAndDelete(id).then(() => {
        res.status(200).send({ state: "Success" });
    }).catch((err) => {
        res.status(400).send({ send: err });
    })
};
//update a specific product
const updateProduct = async (req, res) => {
    const id = req.body.id;
    const {
        productName,
        productCategory,
        productPrice,
        sellerContactNumber,
        productLocation,
        productDescription,
    } = req.body;

    console.log("ID==>", id);

    const newProduct = {
        productName,
        productCategory,
        productPrice,
        sellerContactNumber,
        productLocation,
        productDescription,
    };

    await productMarketplaceModel.findByIdAndUpdate(id, newProduct).then(() => {
        res.status(200).send({ state: "Updates", data: newProduct });
    }).catch((err) => {
        res.status(400).send({ state: err });
    })
}

module.exports ={
    updateProduct,
    deleteProduct,
    getProductDetails,
    getProducts,
    productInsert
}