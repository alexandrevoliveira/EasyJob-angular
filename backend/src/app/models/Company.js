const Base = require('./Base')

module.exports = class Company extends Base {

    constructor() {
        super({ table: 'companies' })
    }

}