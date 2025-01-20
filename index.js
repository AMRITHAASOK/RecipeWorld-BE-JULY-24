//1 load .env file
require('dotenv').config()

//2 import express
const express = require('express') 
//6 import cors
const cors = require('cors')

const db= require('./DB/connection')

const router = require('./routers/router')

//3 create an app using expres
const recipeWorldServer = express()

//7 use
recipeWorldServer.use(cors())
recipeWorldServer.use(express.json())
recipeWorldServer.use(router)

//4 port creation
const PORT = 3000 || process.env.PORT
//5 run
recipeWorldServer.listen(PORT,()=>{
    console.log("recipeWorldServer running on the port "+PORT);
    
})

recipeWorldServer.get('/',(req,res)=>{
    res.send("Welcome to recipeWorldServer")
})