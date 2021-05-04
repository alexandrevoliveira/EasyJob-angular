const db = require('../../config/db')
const Base = require('./Base')

Base.init({ table: 'candidates' })

module.exports = {
    ...Base,
    async search({ name, vacancy }) {

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

        if (vacancy) {
            query += ` AND vacancies.role = '${vacancy}'`
        }

        if (name) {
            query += ` AND candidates.name ILIKE '%${name}%'`
        }

        query += ` ORDER BY vacancies.role`

        const results = await db.query(query)
        return results.rows
    }
}