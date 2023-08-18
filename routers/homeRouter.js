const { Router } = require('express')
const { ex1,ex2,ex3} = require('../controllers/homeControllers')
const app = Router()

app.route("/")
.get(ex1)
.put(ex2)
.delete(ex3)

module.exports = app;