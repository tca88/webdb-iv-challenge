const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const dishesRouter = require("./routers/dishes-router.js");
const recipesRouter = require("./routers/recipes-router.js");
// const ingredientsRouter = require("./routers/ingredients-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/dishes", dishesRouter);
server.use("/api/recipes", recipesRouter);
// server.use("/api/ingredients", ingredientsRouter);

module.exports = server;
