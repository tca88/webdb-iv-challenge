const db = require("../data/dbConfig.js");

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
  update,
  remove
};

function getRecipes() {
  return db("recipes");
}

function getRecipe(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function addRecipe(recipe) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db("recipes")
    .insert(recipe, "id")
    .then(([id]) => {
      return getRecipe(id);
    });
}

function update(id, changes) {
  return db("recipes")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}

function remove(id) {
  return db("recipes")
    .where({ id })
    .del();
}
