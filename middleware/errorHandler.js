const errorHandler = (error, req, res, next) => {
    return res.status(error.response.status).send(error.message)
}

module.exports = errorHandler