const {Router} = require('express')
const {ex10and11} = require('../controllers/postControllers') 
const app = Router()

app.get('/', ex10and11)

module.exports = app