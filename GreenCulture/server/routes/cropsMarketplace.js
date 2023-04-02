const router = require("express").Router();
let cropsMarketplace = require("../models/cropsMarketplace");

//adding new crops to marketplace
router.route("/add").post(async (req,res)=>{
    const cropsName = req.body.cropsName;
    const cropsCategory = req.body.cropsCategory;
    const cropsQuantity = req.body.cropsQuantity;
    const farmerContactNumber = req.body.farmerContactNumber;
    const cropsLocation = req.body.cropsLocation;

    const newCrops = new cropsMarketplace({
        cropsName,
        cropsCategory,
        cropsQuantity,
        farmerContactNumber,
        cropsLocation
    })

    await newCrops.save().then(()=>{
        res.json("Crops Added to Marketplace Successfully");
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with Adding Crops "});
    })

});


//getting crops from marketplace
router.route("/").get(async (req,res)=>{
    await cropsMarketplace.find().then((question)=>{
        res.json(question);
    }).catch((err)=>{
        console.log(err);
    })
});


//updating Crops in marketplace
router.route("/update/:id").put(async(req,res)=>{
    let cropsId = req.params.id;

    const {cropsName,cropsCategory,cropsQuantity,farmerContactNumber,cropsLocation} = req.body;

    const updateCrops = {
        cropsName,
        cropsCategory,
        cropsQuantity,
        farmerContactNumber,
        cropsLocation
    }

    return await cropsMarketplace.findById(cropsId)
        .then((val) => {

            if (val) {
                return val.set(updateCrops).save().then((val) => {
                    return res.status(201).json({ val });
                })
            } else {
                return res.status(404).json({ "message": "Crops not found" })
            }
        }).catch((err) => {
            console.log(err);
            return res.status(500).send({ status: "Error with Update Crops" });
        });
});


//deleting Crops from Marketplace
router.route("/delete/:id").delete(async(req,res)=>{
    let cropsId = req.params.id;

    await cropsMarketplace.findByIdAndDelete(cropsId)
        .then(()=>{
            res.status(200).send({status: "Crops Deleted"});
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status: "Error with Delete Crops",error: err.message});
        })
});


//get one crops in Marketplace
router.route("/get/:id").get(async(req,res)=>{
    let cropsId = req.params.id;
    const cropsMarketplaces = await cropsMarketplace.findById(cropsId)
        .then((Crops)=>{
            res.status(200).send({status: "Crop details Fetched",Crops});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with get crop details",error: err.message});
        })
});

module.exports = router;