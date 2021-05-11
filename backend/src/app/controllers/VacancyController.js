const VacancyClass = require('../models/Vacancy')

let Vacancy = new VacancyClass()

module.exports = {
    async index(req, res) {
        try {
            let { filter, order } = req.query

            if (!filter) filter = null
            if (!order) vacancy = null

            let candidates = await Vacancy.search({ filter, order })


            const search = {
                requirements: filter,
                order: order,
                total: candidates.length
            }

            return res.status(200).json({ candidates, search })
        } catch (err) {
            return res.status(404).json({
                message: "Algo de errado aconteceu."
            })
        }
    }
}