const db = require("../data/dbConfig.js");

module.exports = {
  getDishes,
  getDish,
  addDish,
  update,
  remove
};

function getDishes() {
  return db("dishes");
}

function getDish(id) {
  return db("dishes")
    .where({ id })
    .first();
}

function addDish(dish) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db("dishes")
    .insert(dish, "id")
    .then(([id]) => {
      return getDish(id);
    });
}

function update(id, changes) {
  return db("dishes")
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
  return db("dishes")
    .where({ id })
    .del();
}
