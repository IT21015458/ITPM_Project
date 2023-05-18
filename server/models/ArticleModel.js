const mongoose = require("mongoose");
const schema = mongoose.Schema;

const articleSchema = new schema({
    articleID: {
        type: String,
        required: true
    },
    articleTitle: {
        type: String,
        required: true
    },
    articleCategory: {
        type: String,
        required: true
    },
    articleDescription: {
        type: String,
        required: true
    },
    articleImage: {
        type: String
    }
});

const Article = mongoose.model("Articles", articleSchema);

module.exports = Article;