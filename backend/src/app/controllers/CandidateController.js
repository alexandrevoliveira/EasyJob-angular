const Candidate = require('../models/Candidate')

module.exports = {

    async index(req, res) {
        try {
            let { filter } = req.query
            let term = []

            if (!filter) filter = null

            let candidates = await Candidate.search({ filter })

            term.push({ filter })

            const search = {
                term,
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
