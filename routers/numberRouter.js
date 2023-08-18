const { Router } = require('express')
const { ex9 } = require('../controllers/numberControllers')
const app = Router()

app.get("/:id", ex9)

module.exports = app;