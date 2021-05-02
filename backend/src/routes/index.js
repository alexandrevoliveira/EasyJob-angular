const express = require('express')
const routes = express.Router()

const companies = require('./companies')
const candidate = require('./candidates')

routes.use("/company", companies)
routes.use("/candidate", candidate)

// Alias
routes.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome"
    })
})

module.exports = routes