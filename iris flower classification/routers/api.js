const express = require("express")
const controllers = require("../controllers/controller")
Router = express.Router()


Router.post("/add",controllers.add)

module.exports = Router