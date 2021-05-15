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

const apiPort= process.env.PORT || 8000



app.use("/",scoreRouter)
if(process.env.NODE_ENV == 'production'){
  app.use(express.static('client/build'));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,"client","build","index.html"));
  });
}
app.listen(apiPort,()=>{
    console.log(`It is Working on Port  : ${apiPort}`);
})