const Score = require("../models/scoreModel.js")

createScore = (req,res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success : "false",
            error: "You must provide some Score"
        })
    }
    const score = new Score(body)

    if(!score){
        return res.status(400).json({
            success :false,
            message: "Invalid Entry"
        })
    }
    score.save()
        .then(()=>{
            res.status(201).json({
                success:true,
                id:score._id,
                message:"Added to DB"
            })
        })
        .catch(error=>{
            res.status(400).json({
                error,
                message:"Not Added to DB"
            })
        })


}
deleteScore= async (req,res) => {
    await Score.findOneAndDelete({_id:req.params.id},(err,score)=>{
        if(err){
            res.status(400).json({success: false,error:err})

        }
        if(!score){
            res.status(404).json({success:false,error:"Not found"})
        }
        return res.status(200).json({success:true,data:score})
    }).catch(err=>console.log(err))
}

getScores = async (req,res)=>{
    await Score.find({},(err,scores)=>{
        if(err){
            return res.status(400).json({success:false,error:err})

        }
        if(!scores.length){
            return res.status(404).json({success:false,error:"Nothing found in the Db"})

        }
        return res.status(200).json({success:true,data:scores})
    }).catch(err=>{
        console.log(err)
    })
}

module.exports = {
    getScores,
    deleteScore,
    createScore
}