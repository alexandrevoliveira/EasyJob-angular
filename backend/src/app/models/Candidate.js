const db = require('../../config/db')
const Base = require('./Base')

Base.init({ table: 'candidates' })

module.exports = {
    ...Base,
    async search({ filter, vacancy }) {

        let query = `
            SELECT
            candidates.name, candidates.cpf, candidates.address, candidates.salary,
            applications.vacancy_id as applications_vacancy_id,
            applications.candidate_id as applications_candidate_id,
            vacancies.role as vacancies_role, vacancies.type as vacancies_type, 
            vacancies.area as vacancies_area, vacancies.salary as vacancies_salary
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

        if (filter) {
            query += ` AND (candidates.name ILIKE '%${filter}%'
            OR candidates.cpf ILIKE '%${filter}%')`
        }

        const results = await db.query(query)
        return results.rows
    }
}