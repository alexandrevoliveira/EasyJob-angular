const express = require('express')
const routes = express.Router()

const companies = require('./companies')
const vacancies_quantity = require('./vacancyRouteQuantity')
const vacancies_salary = require('./vacancyRouteSalary')

routes.use("/company", companies)
routes.use("/vacancy/quantity", vacancies_quantity)
routes.use("/vacancy/salary", vacancies_salary)

// Alias
routes.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome"
    })
})

module.exports = routes