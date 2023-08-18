const axios =  require('axios')
const fs = require('fs')

const ex10and11 = async (req, res) => {    
    try{
        let {data} = await axios.get('http://jsonplaceholder.typicode.com/posts/1')
        
        fs.writeFile('./storage/posts.json', JSON.stringify(data), (err) => {
            if (err) throw new Error('Unable to store');
            console.log('Saved!');
        });

        return res.status(200).send(data)
    }catch(error){
        return res.status(error.response.status).send(error.message)
    }
}

// Via the query in the previous exercise write the result of the query
//  in a posts.json file.

module.exports = {ex10and11}