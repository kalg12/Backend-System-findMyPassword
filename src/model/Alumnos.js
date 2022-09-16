const {query} = require('../libs/db');

class Alumnos {
    static getAlumnos() {
        return query('SELECT * FROM datos');
    }
}

module.exports = Alumnos;