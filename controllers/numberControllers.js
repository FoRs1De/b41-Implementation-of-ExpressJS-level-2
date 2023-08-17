const ex9 = (req, res) => {
    res.send(`The number is ${req.params.id}`);
}

module.exports = { ex9 }