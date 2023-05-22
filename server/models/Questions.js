const mongoose = require("mongoose");
const schema = mongoose.Schema;

const QuestionSchema = new schema({
    userName : {
        type : String,
        required : true
    },
    questionCategory : {
        type : String,
        required: true
    },
    questionDescription : {
        type : String,
        required: true
    },
    parentQuestionID : {
        type : String
    },
    questionAddedTime : {
        type : Date,
        default : new Date()
    }      
});

const Question = mongoose.model("Questions",QuestionSchema);

module.exports = Question;