const db = require("../data/dbConfig.js");

module.exports = {
  getIngredients,
  getIngredient,
  addIngredient,
  update,
  remove
};

function getIngredients() {
  return db("ingredients");
}

function getIngredient(id) {
  return db("ingredients")
    .where({ id })
    .first();
}

function addIngredient(ingredient) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db("ingredients")
    .insert(ingredient, "id")
    .then(([id]) => {
      return getIngredient(id);
    });
}

function update(id, changes) {
  return db("ingredients")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return getIngredient(id);
      } else {
        return null;
      }
    });
}

function remove(id) {
  return db("ingredients")
    .where({ id })
    .del();
}
