const { Router } = require('express')
const { postForm, showPost, getForm, showGet } = require('../controllers/formControllers')
const app = Router()

app.get('/post', postForm)
app.post('/showPost', showPost)
app.get('/get', getForm)
app.get('/showGet', showGet)

module.exports = app