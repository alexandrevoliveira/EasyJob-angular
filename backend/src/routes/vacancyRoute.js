const express = require('express')
const routes = express.Router()

const VacancyController = require('../app/controllers/VacancyController')

routes.get("/", VacancyController.indexQuantity)
routes.get("/", VacancyController.indexSalary)

module.exports = routes