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

//Articles updating
router.route("/update/:id").put(async(req,res)=>{
    let articleId = req.params.id;

    const {articleTitle,articleCategory,articleDescription} = req.body;

    const updateArticle = {
        articleTitle,
        articleCategory,
        articleDescription
    }

    const update = await Article.findByIdAndUpdate(articleId,updateArticle)
        .then(()=>{
            res.status(200).send({status: "Article updated"});
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status: "Error with updating Article "});
        })
});

//Articles delete
router.route("/delete/:id").delete(async(req,res)=>{
    let articleId = req.params.id;

    await Article.findByIdAndDelete(articleId)
        .then(()=>{
            res.status(200).send({status: "Article Deleted"});
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status: "Error with Delete Article",error: err.message});
        })
});

//one Specific Article getting
router.route("/get/:id").get(async(req,res)=>{
    let articleId = req.params.id;
    const article = await Article.findById(articleId)
        .then((Articles)=>{
            res.status(200).send({status: "Article Fetched",Articles});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with get Article",error: err.message});
        })
});

module.exports = router;