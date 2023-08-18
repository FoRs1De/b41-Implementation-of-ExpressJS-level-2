const axios =  require('axios')
const fs = require('fs')

const ex10and11 = async (req, res, next) => {    
    try{
        let {data} = await axios.get('http://jsonplaceholder.typicode.com/posts/1')
        
        fs.writeFile('./storage/posts.json', JSON.stringify(data), (err) => {
            if (err) throw new Error('Unable to store');
            console.log('Saved!');
        });

        return res.status(200).send(data)

    }catch(error){
        return next(error)
    }
}

module.exports = {ex10and11}