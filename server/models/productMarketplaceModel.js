const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productMarketplaceSchema = new schema({
    productName : {
        type : String,
        required : true
    },
    productCategory : {
        type : String,
        required: true
    },
    productPrice : {
        type : Number,
        required: true
    },
    sellerContactNumber : {
        type : Number,
        required: true  
    },
    productLocation : {
        type : String,
        required: true
    },
    productDescription : {
        type : String,
        required: true
    },
    productImage:{
        type : String
    }    
});

const productMarketplace = mongoose.model("ProductMarketplace",productMarketplaceSchema);
module.exports = productMarketplace;