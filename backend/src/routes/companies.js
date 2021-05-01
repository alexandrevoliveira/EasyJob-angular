const express = require('express')
const routes = express.Router()

const CompanyController = require('../app/controllers/CompanyController')

routes.get("/", CompanyController.index)

module.exports = routes