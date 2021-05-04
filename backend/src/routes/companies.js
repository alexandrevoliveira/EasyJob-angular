const express = require('express')
const routes = express.Router()

const CompanyController = require('../app/controllers/CompanyController')

routes.post("/sendMail", CompanyController.sendMail)

module.exports = routes