const recipes  =  require('../models/recipeSchema')

exports.getAllRecipes=async(req,res)=>{
    console.log("Inside recipe controller");
    
    try{
        const response = await recipes.find()
        res.status(200).json(response)
    }
    catch(err){
        res.status(406).json(err)  
    }
}
exports.getARecipe=async(req,res)=>{
    console.log("Inside A recipe controller");
    const {id} = req.params
    try{
        const response = await recipes.findById({_id:id})
        res.status(200).json(response)
    }
    catch(err){
        res.status(406).json(err)  
    }
}
exports.getRelatedRecipe=async(req,res)=>{
    console.log("Inside A recipe controller");
    const cuisine = req.query.cuisine
    try{
        const response = await recipes.find({cuisine})
        res.status(200).json(response)
    }
    catch(err){
        res.status(406).json(err)  
    }
}