const express = require('express')
const routes = express.Router()

const candidates = require('./candidates')
const vacancies = require('./vacancies')

routes.use("/candidate", candidates)
routes.use("/vacancy", vacancies)

// Alias
routes.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome"
    })
})

module.exports = routes