const Base = require('./Base')

module.exports = class Application extends Base {

    constructor() {
        super({ table: 'applications' })
    }

}