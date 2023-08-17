const axios =  require('axios')

const ex10 = async (req, res) => {    
    try{
        console.log("EX10 Working");
        let {data} = await axios.get('http://jsonplaceholder.typicode.com/posts/1')
        console.log(data)
        return res.status(200).send(data)
    }catch(error){
        console.log(error)
        return res.status(error.response.status).send(error.message)
    }
}


// Via the query in the previous exercise write the result of the query in a posts.json file.

module.exports = {ex10}