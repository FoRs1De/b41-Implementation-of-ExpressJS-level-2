const {Router} = require('express')
const {ex10} = require('../controllers/postControllers') 
const app = Router()

app.get('/', ex10)

module.exports = app