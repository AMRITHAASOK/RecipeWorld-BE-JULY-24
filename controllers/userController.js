const users = require('../models/userSchema')
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken')

exports.register=async(req,res)=>{
    console.log("Inside Register Function");

    const {username,email,password} = req.body

    const existingUser = await users.findOne({email})
    if(existingUser){
        res.status(402).json("User Already Existing...")
    }
    else{
        const encryptedPassword = await bcrypt.hash(password,10)

        console.log(encryptedPassword);
        
        const newUser = new users({
            username,email,password:encryptedPassword
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
    
}

exports.login=async(req,res)=>{
    console.log("Inside login Function");

    const {email,password} = req.body

    const existingUser = await users.findOne({email})
    if(existingUser){
        const actualPswd = await bcrypt.compare(password,existingUser.password)
        if(actualPswd){
            //token generation
            const token = jwt.sign({userId:existingUser._id},process.env.jwtKey)
            console.log(token);
            
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(402).json("Incorrect password")
        }
        
    }
    else{
        res.status(402).json("Invalid User")
    }
    
}

