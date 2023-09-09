const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())

app.use('/',(req,res)=>{
    res.json({Message:"App is working"})
})
const port = 8000
app.listen(process.env.PORT || port,()=>{
    try{
        console.log(`Server is running on port ${port}`)
    }catch{
        console.log("server error")
    }
})
