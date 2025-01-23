const testimonies = require('../models/testimonySchema')


exports.addTestimony=async(req,res)=>{

    console.log("Inside add Testimony Function");

    const {name,email,message}=req.body
    try{
        const newTestimony = new testimonies({
            name,email,message
        })
        await newTestimony.save()//to save in mongodb
        res.status(200).json(newTestimony)
    }
    catch(err){
        res.status(406).json(err)  
    }
    

}