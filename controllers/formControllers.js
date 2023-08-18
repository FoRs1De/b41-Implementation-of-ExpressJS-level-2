const postForm = (req, res) => {
    res.render('./formPost.ejs');
}

const showPost = (req, res) => {
    console.log(req)
    console.log(req.body)
    console.log(req.method)
    res.send("Show Post Working")
}

const getForm = (req, res) => {
    res.render('./formGet.ejs');
}

const showGet = (req, res) => {
    console.log(req.body)
    console.log(req.query)
    console.log(req.method)
    res.send("Show Get Working")
}

module.exports = { postForm, showPost, getForm, showGet }