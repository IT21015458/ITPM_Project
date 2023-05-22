const router = require("express").Router();
let Question = require("../models/Questions");

//Question add
router.route("/add").post(async (req,res)=>{
    const userName = req.body.userName;
    const questionCategory = req.body.questionCategory;
    const questionDescription = req.body.questionDescription;
    const parentQuestionID = req.body.parentQuestionID;

    const newQuestion = new Question({
        userName,
        questionCategory,
        questionDescription,
        parentQuestionID
    })

    await newQuestion.save().then(()=>{
        res.json("Question Added Successfully");
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with Adding Question "});
    })

});



//get
router.route("/").get(async (req,res)=>{
    await Question.find().then((question)=>{
        res.json(question);
    }).catch((err)=>{
        console.log(err);
    })
});


//update
router.route("/update/:id").put(async(req,res)=>{
    let questionId = req.params.id;

    const {userName,questionCategory,questionDescription,parentQuestionID} = req.body;

    const updateQuestion = {
        userName,
        questionCategory,
        questionDescription,
        parentQuestionID
    }

    return await Question.findById(questionId)
        .then((val) => {

            if (val) {
                return val.set(updateQuestion).save().then((val) => {
                    return res.status(201).json({ val });
                })
            } else {
                return res.status(404).json({ "message": "Question not found" })
            }
        }).catch((err) => {
            console.log(err);
            return res.status(500).send({ status: "Error with Update Question" });
        });
});


//delete
router.route("/delete/:id").delete(async(req,res)=>{
    let questionId = req.params.id;

    await Question.findByIdAndDelete(questionId)
        .then(()=>{
            res.status(200).send({status: "Question Deleted"});
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status: "Error with Delete Question",error: err.message});
        })
});


//one get
router.route("/get/:id").get(async(req,res)=>{
    let questionId = req.params.id;
    const article = await Question.findById(questionId)
        .then((Questions)=>{
            res.status(200).send({status: "Question Fetched",Questions});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with get Question",error: err.message});
        })
});

module.exports = router;