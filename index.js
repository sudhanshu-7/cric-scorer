const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const db = require("./db")
const scoreRouter = require("./routes/score-router")
const app = express()

app.use (cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const apiPort= 8000

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.use("/",scoreRouter)
app.listen(apiPort,()=>{
    console.log(`It is Working on Port  : ${apiPort}`);
})