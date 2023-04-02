const mongoose = require("mongoose");
const schema = mongoose.Schema;

const cropsMarketplaceSchema = new schema({
    cropsName : {
        type : String,
        required : true
    },
    cropsCategory : {
        type : String,
        required: true
    },
    cropsQuantity : {
        type : Number,
        required: true
    },
    farmerContactNumber : {
        type : Number,
        required: true  
    },
    cropsLocation : {
        type : String,
        required: true
    }     
});

const cropsMarketplace = mongoose.model("CropsMarketplace",cropsMarketplaceSchema);

module.exports = cropsMarketplace;