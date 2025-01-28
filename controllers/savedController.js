const saves = require('../models/savedSchema')

exports.addToSave=async(req,res)=>{

    console.log("Inside add to download");

    const {id}= req.params
    const userId = req.payload
    const {name,image} = req.body
    console.log(id,userId,name,image);
    
   try{
    existingRecipe = await saves.findOne({id})
    if(existingRecipe){

        res.status(401).json("Already in Collection")
    }
    else{
        const newRecipe = new saves({
          id,name,image,userId
        })
        await newRecipe.save()
        res.status(200).json(newRecipe)
    }
   }
   catch(err){
    res.status(406).json(err)  
}
}
exports.getAllSavedRecipes=async(req,res)=>{
    console.log("Inside getAllSaved controller");
    const userId = req.payload
    try{
        const response = await saves.find({userId})
        res.status(200).json(response)
    }
    catch(err){
        res.status(406).json(err)  
    }
}

exports.deleteSavedRecipes=async(req,res)=>{
    console.log("Inside deleteSaved controller");
    const {id} = req.params
    console.log(id);
    
    try{
        const response = await saves.findByIdAndDelete({_id:id})
        res.status(200).json(response)
    }
    catch(err){
        res.status(406).json(err)  
    }
}