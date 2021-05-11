const CandidateClass = require('../models/Candidate')

let Candidate = new CandidateClass()

module.exports = {

    async index(req, res) {
        try {
            let { filter } = req.query

            if (!filter) filter = null

            let candidates = await Candidate.search({ filter })

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
