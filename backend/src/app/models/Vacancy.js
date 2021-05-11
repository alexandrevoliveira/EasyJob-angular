const db = require('../../config/db')
const Base = require('./Base')

module.exports = class Vacancy extends Base {

    constructor() {
        super({ table: 'vacancies' })
    }

    async search({ filter, order }) {

        let query = ` SELECT * FROM vacancies`

        if (filter) {
            query += ` WHERE requirements ILIKE '%${filter}%'`
        }
        if (order) {
            query += ` ORDER BY ${order} desc`;
        }

        const results = await db.query(query)
        return results.rows
    }
}