const express = require('express')
const bodyParser =  require('body-parser')
const app = express()

const adminRoute = require('./routes/admin-route')
const custmerRoute = require('./routes/custmer-route')
const ownerRoute = require('./routes/owner-route')
const statistaicsRoute = require('./routes/statistics-route')


app.use(bodyParser.json())

app.use('/api/admin', adminRoute)
app.use('/api/custmer', custmerRoute)
app.use('/api/owner', ownerRoute)
app.use('/api/statistaics', statistaicsRoute)



app.get('/', (req,res,next)=>{
    res.status(201)
    res.json({message:"welcome to node js"})
})


app.listen(7000)
