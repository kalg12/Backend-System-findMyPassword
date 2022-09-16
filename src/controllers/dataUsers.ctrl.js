const Alumnos = require('../model/Alumnos');

const getAlumnos = async (req, res) =>  {
    const result = await Alumnos.getAlumnos()

    return res.status(result.success?200:400).json(result)
}


module.exports = {
    getAlumnos
}