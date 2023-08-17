require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path')

const port = process.env.PORT || 3000

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.route('/')
.get((req, res)=>{res.send("Working")})
.put((req, res)=>{res.sendFile(path.join(__dirname, 'pages/index.html'))})
.delete((req, res)=>{res.json({good : "yep"})})

app.get('/test-ejs', (req, res)=>{
    res.render('./index.ejs', { myTitle: 'my first title' })
})

app.listen(port,()=>{
  console.log(`http://localhost:${port}/`);
});
