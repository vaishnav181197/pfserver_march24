//importing and configuring dotenv for accessing env-variables 
require('dotenv').config()
//importing express
const express=require('express')
//importing cors
const cors=require('cors')
//importing routes
const router=require('./Routes/routing')
//importing db-connectopm
require('./DBconnection/dbconn')

const jwtmiddle=require('./Middlewares/jwtMiddleware')


//creating express server app
const pFserver=express()



//configuring cors middleware with server app
pFserver.use(cors())
//configuring json middleware
pFserver.use(express.json())

//application level middleware
// pFserver.use(jwtmiddle)

//configuring routing module
pFserver.use(router)

//serving uploaded files
pFserver.use('/upload',express.static('./uploads'))

const PORT=3000
//activating server
pFserver.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})



pFserver.get('/',(req,res)=>{
    res.status(200).send("<h1>Hello</h1>")
})