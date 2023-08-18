const ex4 = (req, res)=>{
    res.render('./index.ejs', { myTitle: 'my first title' })
}

const ex5 =  (req, res)=>{
    res.render('./users.ejs', { users : ['Bob', 'John', 'Jane' ]})
}

module.exports = { ex4, ex5}