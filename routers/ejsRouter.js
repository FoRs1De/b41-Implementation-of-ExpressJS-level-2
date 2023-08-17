const { Router } = require('express')
const { ex4, ex5 } = require('../controllers/ejsControllers')
const app = Router()

app.get('/1', ex4)

app.get('/2', ex5)

module.exports = app;