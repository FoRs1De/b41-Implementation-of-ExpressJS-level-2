require('dotenv').config()
const express = require('express');
const app = express();
const homeRouter = require('./routers/homeRouter')
const ejsRouter = require('./routers/ejsRouter')

const port = process.env.PORT || 3000

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/home', homeRouter)
app.use('/test-ejs', ejsRouter)

app.listen(port,()=>{
  console.log(`http://localhost:${port}/`);
});
