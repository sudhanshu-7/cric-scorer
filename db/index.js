const mongoose = require('mongoose')
require('dotenv').config()
mongoose
    .connect(`mongodb+srv://sudhanshuTesting:${process.env.PASSWORD}@cluster0.cnm4a.mongodb.net/scores?retryWrites=true&w=majority`, { useNewUrlParser: true  , useUnifiedTopology:true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db