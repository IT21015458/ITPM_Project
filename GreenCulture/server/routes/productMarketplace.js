const router = require("express").Router();
let productMarketplace = require("../models/productMarketplace");

//adding new products to marketplace
router.route("/add").post(async (req, res) => {
    const productName = req.body.productName;
    const productCategory = req.body.productCategory;
    const productPrice = req.body.productPrice;
    const sellerContactNumber = req.body.sellerContactNumber;
    const productLocation = req.body.productLocation;
    const productDescription = req.body.productDescription;

    const newProduct = new productMarketplace({
        productName,
        productCategory,
        productPrice,
        sellerContactNumber,
        productLocation,
        productDescription
    })

    await newProduct.save().then(() => {
        res.json("Product Added to Marketplace Successfully");
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with Adding Product " });
    })

});


//getting Products from marketplace
router.route("/").get(async (req, res) => {
    await productMarketplace.find().then((product) => {
        res.json(product);
    }).catch((err) => {
        console.log(err);
    })
});


//updating Crops in marketplace
router.route("/update/:id").put(async (req, res) => {
    let productId = req.params.id;

    const { productName, productCategory, productPrice, sellerContactNumber, productLocation, productDescription, } = req.body;
    //console.log(productId)
    const updateProduct = {
        productName,
        productCategory,
        productPrice,
        sellerContactNumber,
        productLocation,
        productDescription
    }

    return await productMarketplace.findById(productId)
        .then((val) => {

            if (val) {
                return val.set(updateProduct).save().then((val) => {
                    return res.status(201).json({ val });
                })
            } else {
                return res.status(404).json({ "message": "product not found" })
            }
        }).catch((err) => {
            console.log(err);
            return res.status(500).send({ status: "Error with Update product" });
        })
});


//deleting Products from Marketplace
router.route("/delete/:id").delete(async (req, res) => {
    let productId = req.params.id;

    await productMarketplace.findByIdAndDelete(productId)
        .then(() => {
            res.status(200).send({ status: "Product Deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with Delete Product", error: err.message });
        })
});


//get one Product in Marketplace
router.route("/get/:id").get(async (req, res) => {
    let productId = req.params.id;
    const productMarketplaces = await productMarketplace.findById(productId)
        .then((Product) => {
            res.status(200).send({ status: "Product details Fetched", Product });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get Product details", error: err.message });
        })
});

module.exports = router;