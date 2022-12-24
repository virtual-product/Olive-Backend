const express = require('express')
const bodyParser =  require('body-parser')
const app = express()


app.use(bodyParser.json())


app.get('/', (req,res,next)=>{
    res.status(201)
    res.json({message:"welcome to node js"})
})


app.listen(7000)
