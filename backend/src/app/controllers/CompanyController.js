const Candidate = require('../models/Candidate')

module.exports = {

    async index(req, res) {
        try {
            let { filter, vacancy } = req.query

            if (!filter) filter = null
            if (!vacancy) vacancy = null

            let candidates = await Candidate.search({ filter, vacancy })

            const search = {
                term: filter,
                total: candidates.length
            }

            return res.status(200).json({
                candidates,
                search
            })
        } catch (err) {
            return res.status(404).json({
                message: "Algo de errado aconteceu."
            })
        }
    }

}