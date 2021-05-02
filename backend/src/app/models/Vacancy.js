const db = require('../../config/db')
const Base = require('./Base')

Base.init({ table: 'vacancies' })

module.exports = {
    ...Base,
    async search({ filter }) {

        let query = ` SELECT * FROM vacancies `

        if (filter) {
            query += `order by ${filter} desc`;
        }


        const results = await db.query(query)
        return results.rows
    }
}