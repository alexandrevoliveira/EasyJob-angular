const express = require('express')
const routes = express.Router()

const companies = require('./companies')
const candidates = require('./candidates')

routes.use("/company", companies)
routes.use("/candidate", candidates)

// Alias
routes.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome"
    })
})

module.exports = routes