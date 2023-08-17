require('dotenv').config()
const express = require('express');
const app = express();
const homeRouter = require('./routers/homeRouter')
const ejsRouter = require('./routers/ejsRouter')
const formRouter = require('./routers/formRouter')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

app.use(bodyParser.json())

// Set the view engine to ejs
app.set('view engine', 'ejs');

// ROUTES
app.use('/home', homeRouter)
app.use('/test-ejs', ejsRouter)
app.use('/form', formRouter)

app.listen(port,()=>{
  console.log(`http://localhost:${port}/`);
});
