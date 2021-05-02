const db = require('../../config/db')
const Base = require('./Base')

Base.init({ table: 'vacancies' })

module.exports = {
    ...Base,
    // async search({ filter }) {

    //     let query = ` SELECT * FROM vacancies order by` + filter + `desc;`

    //     const results = await db.query(query)
    //     return results.rows
    // }
    async searchQuantity({ }) {

        let query = ` SELECT * FROM vacancies order by quantity desc;`

        const results = await db.query(query)
        return results.rows
    },
    async searchSalary({ }) {

        let query = ` SELECT * FROM vacancies order by salary desc;`

        const results = await db.query(query)
        return results.rows
    }
}