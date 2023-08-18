const path = require('path')

const ex1 = (req, res) => {res.send("Working")}

const ex2 = (req, res) => {res.sendFile(path.join(__dirname, '../pages/index.html'))}

const ex3 = (req, res) => {res.json({good : "yep"})} 

module.exports = {ex1, ex2, ex3}