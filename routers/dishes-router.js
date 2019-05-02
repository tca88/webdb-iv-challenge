const router = require("express").Router();

const Dishes = require("../models/dishes-model.js");

router.get("/", (req, res) => {
  Dishes.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "We ran into an error retrieving the tracks" });
    });
});

router.get("/:id", (req, res) => {
  Dishes.getDish(req.params.id)
    .then(dish => {
      if (dish) {
        res.status(200).json(dish);
      } else {
        res.status(404).json({ message: "We could not find the dis" });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "We ran into an error retrieving the dish" });
    });
});

router.post("/", (req, res) => {
  Dishes.addDish({ name: "singas" })
    .then(dish => {
      if (dish.name) {
        res.status(201).json(dish);
      } else {
        res.status(400).json({ message: "Please provide name of the track" });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "We ran into an error retrieving the dish" });
    });
});

module.exports = router;
