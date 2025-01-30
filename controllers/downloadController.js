const downloads = require('../models/downloadSchema')

exports.addToDownload=async(req,res)=>{

    console.log("Inside add to download");

    const {id}= req.params
    const userId = req.payload
    const {name,cuisine,image} = req.body
    console.log(id,userId,name,cuisine,image);
    
   try{
    existingRecipe = await downloads.findOne({id})
    if(existingRecipe){
       existingRecipe.count++
        await existingRecipe.save()
        res.status(200).json(existingRecipe)
    }
    else{
        const newDownload = new downloads({
          id,name,cuisine,image,count:1,userId
        })
        await newDownload.save()
        res.status(200).json(newDownload)
    }
   }
   catch(err){
    res.status(406).json(err)  
}
}


exports.getDownloadedList=async(req,res)=>{
    console.log("Inside downloadList controller");
    
    try{
        const response = await downloads.find()
        res.status(200).json(response)
    }
    catch(err){
        res.status(406).json(err)  
    }
}