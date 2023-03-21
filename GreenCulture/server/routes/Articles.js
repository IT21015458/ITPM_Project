const router = require("express").Router();
let Article = require("../models/Articles");

//Articles adding
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

//Articles getting
router.route("/").get(async (req,res)=>{
    await Article.find().then((articles)=>{
        res.json(articles);
    }).catch((err)=>{
        console.log(err);
    })
});

module.exports = router;