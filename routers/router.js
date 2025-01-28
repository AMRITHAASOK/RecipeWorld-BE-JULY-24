const express = require("express")

const recipeController = require("../controllers/recipeController")

const testimonyController=require('../controllers/testimonyController')

const userController = require('../controllers/userController')

const downloadController = require('../controllers/downloadController')

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

module.exports = router