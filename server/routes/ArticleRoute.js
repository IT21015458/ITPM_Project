const express = require("express");

const { articleInsert, getArticles, deleteArticle, updateArticle, getArticleOne } = require("../Controllers/ArticleController");

const router = express.Router();

//Add Articles
router.post("/AddArticles", articleInsert);

//Get Articles
router.get("/getArticles", getArticles);

//delete a article
router.delete("/deleteArticle/:id", deleteArticle)

//update article
router.put("/updateArticle", updateArticle)

//get specific article data
router.get("/getArticleData/:id", getArticleOne)

module.exports = router;