const router = require("express").Router();

const Recipes = require("../models/recipes-model.js");

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "We ran into an error retrieving the recipe" });
    });
});

router.get("/:id", (req, res) => {
  Recipes.getRecipe(req.params.id)
    .then(recipe => {
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).json({ message: "We could not find the recipe" });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "We ran into an error retrieving the recipe" });
    });
});

router.post("/", (req, res) => {
  Recipes.addRecipe(req.body)
    .then(recipe => {
      if (recipe.name || recipe.instructions || recipe.dish_id) {
        res.status(201).json(recipe);
      } else {
        res.status(400).json({
          message: "Please provide necessary information for the recipe"
        });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "We ran into an error retrieving the recipe" });
    });
});

module.exports = router;
