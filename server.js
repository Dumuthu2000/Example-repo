const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json)


app.listen(process.env.PORT || 5000,()=>{
    try{
        console.log("Server is running on port 5000")
    }catch{
        console.log("server error")
    }
})
