const express = require('express')
const routes = express.Router()

// Alias
routes.get("/", (req, res) => {
    return res.status(200).send({
        message: "Welcome",
    })
})

module.exports = routes