const db = require('../../config/db')
const Base = require('./Base')

module.exports = class Candidate extends Base {

    constructor() {
        super({ table: 'candidates' })
    }

    async search({ filter }) {

        let query = `
            SELECT
            candidates.name,
            vacancies.area as vacancies_area,
            vacancies.role as vacancies_role,
            candidates.salary
            FROM candidates
            LEFT JOIN applications
                ON (candidates.id = applications.candidate_id)
            LEFT JOIN vacancies
                ON (applications.vacancy_id = vacancies.id)
            WHERE 1 = 1
        `

        if (filter) {
            query += ` 
                AND vacancies.role ilike '%${filter}%'
                OR candidates.name ilike '%${filter}%'
`
        }

        query += ` ORDER BY vacancies.role`

        const results = await db.query(query)
        return results.rows
    }
}