const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
require("dotenv").config();
const app = express();
const fileUpload = require("express-fileupload")

app.use("/Assets", express.static(__dirname + "/Assets"))
const PORT = process.env.PORT || 8060;
const URL = process.env.MONGODB_URL;
app.use(cors());
app.use(express.json());
app.use(fileUpload());

mongoose.connect(URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

//Db connection
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB Connection Success!");
});


app.listen(PORT, () => {
	console.log(`Server is up and running on Port: ${PORT}`)
});

const articleRouter = require("./routes/ArticleRoute");
app.use("/api/article", articleRouter);