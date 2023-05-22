const articleModel = require("../models/ArticleModel");

//article insert
const articleInsert = async (req, res) => {
    const {
        articleID,
        articleTitle,
        articleCategory,
        articleDescription,
    } = req.body;

    const ArticleItem = req.files.file;
    const ArticleNameStore = new Date().getTime();
    await ArticleItem.mv("Assets/Articles/" + `${ArticleNameStore}.jpg`, (err) => {
        console.log("This is the file error", err);
    })
    console.log("The article name is", ArticleNameStore);

    try {
        const articles = new articleModel({
            articleID,
            articleTitle,
            articleCategory,
            articleDescription,
            articleImage: `${ArticleNameStore}.jpg`
        });
        return await articles
            .save().then((value) => {
                return res.status(201).json({ ID: value._id })
            }).catch((err) => {
                return res.status(500).json({ err });
            })
    } catch (error) {
        console.log("Error", error);
        res.status(400).json({ error: error.message })
    }
};

//get articles
const getArticles = async (req, res) => {
    try {
        const articles = await articleModel.find();
        return res.status(200).json(articles);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message })
    }
}

//delete article
const deleteArticle = async (req, res) => {
    const id = req.params.id;
    await articleModel.findByIdAndDelete(id).then(() => {
        res.status(200).send({ state: "Success" });
    }).catch((err) => {
        res.status(400).send({ send: err });
    })
}

//update article
const updateArticle = async (req, res) => {
    const id = req.body.id;
    const {
        articleID,
        articleTitle,
        articleCategory,
        articleDescription,
    } = req.body;
    console.log("ID==>", id);

    const newArticle = {
        articleID,
        articleTitle,
        articleCategory,
        articleDescription,
    };

    await articleModel.findByIdAndUpdate(id, newArticle).then(() => {
        res.status(200).send({ state: "Updated", data: newArticle });
    }).catch((err) => {
        res.status(400).send({ state: err });
    })
}

//get specific article view
const getArticleOne = async (req, res) => {
    try {
        const ID = req.params.id;
        const article = await articleModel.find({ _id: ID });

        res.status(200).send({ status: "Article Data Received", ArticleDetails: article });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
}


module.exports = {
    articleInsert,
    getArticles,
    deleteArticle,
    updateArticle,
    getArticleOne
}