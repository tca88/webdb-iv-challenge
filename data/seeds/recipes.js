exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          name: "Veggie Tacos",
          instructions: "Instructions Lorem Ipsum",
          dish_id: 1
        },
        {
          id: 2,
          name: "Shrimp Tacos",
          instructions: "Instructions Lorem Ipsum",
          dish_id: 1
        },
        {
          id: 3,
          name: "Peperoni Pizza",
          instructions: "Instructions Lorem Ipsum",
          dish_id: 2
        }
      ]);
    });
};
