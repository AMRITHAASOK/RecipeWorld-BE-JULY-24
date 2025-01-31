const express = require("express")

const recipeController = require("../controllers/recipeController")

const testimonyController=require('../controllers/testimonyController')

const userController = require('../controllers/userController')

const downloadController = require('../controllers/downloadController')

const savedController = require('../controllers/savedController')

const jwtMiddleware = require('../middlewares/jwtMiddleware')

const router = new express.Router()

//http://localhost:3000/allRecipes
router.get("/allRecipes",recipeController.getAllRecipes)

//http://localhost:3000/addTestimony
router.post("/addTestimony",testimonyController.addTestimony)

//http://localhost:3000/register
router.post("/register",userController.register)

//http://localhost:3000/login
router.post("/login",userController.login)

//http://localhost:3000/getARecipes/3453464574
router.get("/getARecipe/:id",jwtMiddleware,recipeController.getARecipe)

http://localhost:3000/relatedRecipe?cuisine=Pakistani
router.get("/relatedRecipe",jwtMiddleware,recipeController.getRelatedRecipe)

//http://localhost:3000/addToDownload/87679789o
router.post("/addToDownload/:id",jwtMiddleware,downloadController.addToDownload)

//http://localhost:3000/addToSave/87679789o
router.post("/addToSave/:id",jwtMiddleware,savedController.addToSave)

//http://localhost:3000/getSavedRecipe
router.get("/getSavedRecipe",jwtMiddleware,savedController.getAllSavedRecipes)

//http://localhost:3000/deleteSavedRecipe/679863fc9440b02621f58731
router.delete("/deleteSavedRecipe/:id",jwtMiddleware,savedController.deleteSavedRecipes)

//http://localhost:3000/allDownloadList
router.get("/allDownloadList",downloadController.getDownloadedList)

//http://localhost:3000/allUserList
router.get("/allUserList",userController.getUserList)

//http://localhost:3000/allTestimonies
router.get("/allTestimonies",testimonyController.getTestimonyList)

//http://localhost:3000/updateTestimony/6758769?status=Approved
router.get("/updateTestimony/:id",testimonyController.updateTestimony)


module.exports = router