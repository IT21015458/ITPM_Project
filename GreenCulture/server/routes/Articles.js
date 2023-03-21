const router = require("express").Router();
let Article = require("../models/Articles");

//Articles add
router.route("/add").post(async (req,res)=>{
    const articleID =req.body.articleID;
    const articleTitle = req.body.articleTitle;
    const articleCategory = req.body.articleCategory;
    const articleDescription = req.body.articleDescription;

    const newArticle = new Article({
        articleID,
        articleTitle,
        articleCategory,
        articleDescription
    })

    await newArticle.save().then(()=>{
        res.json("Artcle Added Successfully");
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with Adding Article "});
    })

});


module.exports = router;