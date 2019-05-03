const router = require("express").Router();

const Ingredients = require("../models/ingredients-model.js");

router.get("/", (req, res) => {
  Ingredients.getIngredients()
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "We ran into an error retrieving the recipe" });
    });
});

router.get("/:id", (req, res) => {
  Ingredients.getIngredient(req.params.id)
    .then(ingredient => {
      if (ingredient) {
        res.status(200).json(ingredient);
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
  Ingredients.addIngredient(req.body)
    .then(ingredient => {
      if (
        ingredient.ingredient ||
        ingredient.quantity ||
        ingredient.dish_id ||
        ingredient.recipe_id
      ) {
        res.status(201).json(ingredient);
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
