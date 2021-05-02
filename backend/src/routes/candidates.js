const express = require('express')
const routes = express.Router()

const CandidateController = require('../app/controllers/CandidateController')

routes.get("/", CandidateController.index)

module.exports = routes