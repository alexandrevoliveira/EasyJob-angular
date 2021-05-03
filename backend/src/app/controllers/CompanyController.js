const Candidate = require('../models/Candidate')

module.exports = {

    async index(req, res) {
        try {
            let { name, vacancy } = req.query
            let term = []

            if (!name) name = null
            if (!vacancy) vacancy = null

            let candidates = await Candidate.search({ name, vacancy })

            term.push({ name })
            term.push({ vacancy })

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