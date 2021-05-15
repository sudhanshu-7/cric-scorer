const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Score = new Schema({
    team_A:{
        score :{type : String , required:  true},
        name : {type : String , required :true}

    },
    team_B:{
        score :{type : String , required: true},
        name : {type : String , required :true}
        
    },
})

const model = mongoose.model("score",Score)

module.exports = model