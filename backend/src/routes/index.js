const express = require('express')
const routes = express.Router()

const candidates = require('./candidates')
const vacancies = require('./vacancies')
const companies = require('./companies')

routes.use("/candidate", candidates)
routes.use("/vacancy", vacancies)
routes.use("/company", companies)

// Alias
routes.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome"
    })
})

module.exports = routes