const express = require("express")

const recipeController = require("../controllers/recipeController")

const router = new express.Router()
//http://localhost:3000/allRecipes
router.get("/allRecipes",recipeController.getAllRecipes)

module.exports = router