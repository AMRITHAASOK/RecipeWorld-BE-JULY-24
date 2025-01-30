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
exports.getTestimonyList=async(req,res)=>{
    console.log("Inside TrestimonyList controller");
    
    try{
        const response = await testimonies.find()
        res.status(200).json(response)
    }
    catch(err){
        res.status(406).json(err)  
    }
}

exports.updateTestimony=async(req,res)=>{

    console.log("Inside update Testimony Function");
    const {id}=req.params
    const status=req.query.status
    try{
      const existingTestimony = await testimonies.findById({_id:id})
      if(existingTestimony){
        existingTestimony.status=status
        await existingTestimony.save()//to save in mongodb
        res.status(200).json(existingTestimony)
      }
      else{
        res.status(404).json("Not Found...")  
      }
    
    }
    catch(err){
        res.status(406).json(err)  
    }
    

}