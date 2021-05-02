const Vacancy = require('../models/Vacancy')

module.exports = {
    async indexQuantity(req, res) {
        try {
            let { filter } = req.query

            // if (!filter) filter = null            
            // let vacancies = await Vacancy.search({})
            vacancies = await Vacancy.searchQuantity({})


            const search = {
                term: filter,
                total: vacancies.length
            }

            return res.status(200).json({ vacancies })
        } catch (err) {
            return res.status(404).json({
                message: "Algo de errado aconteceu."
            })
        }
    },
    async indexSalary(req, res) {
        try {
            let { filter } = req.query

            if (!filter) filter = null
            // let vacancies = await Vacancy.search({})
            vacancies = await Vacancy.searchSalary({})


            const search = {
                term: filter,
                total: vacancies.length
            }

            return res.status(200).json({ vacancies })
        } catch (err) {
            return res.status(404).json({
                message: "Algo de errado aconteceu."
            })
        }
    }
}
