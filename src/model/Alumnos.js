const {query} = require('../libs/db');

class Alumnos {
    static getAlumnos() {
        return query('SELECT * FROM datos');
    }

    static getAlumno(CURP) {
        return query('SELECT * FROM datos WHERE CURP = ?', [CURP]);
    }
}

module.exports = Alumnos;