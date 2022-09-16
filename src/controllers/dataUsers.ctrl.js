const Alumnos = require('../model/Alumnos');

const getAlumnos = async (_, res) =>  {
    const result = await Alumnos.getAlumnos()

    return res.status(result.success?200:400).json(result)
}

const getAlumno = async (req, res) => {
    const {CURP} = req.params;
    const result = await Alumnos.getAlumno(CURP);
    console.log(result[0]);
    return res.status(result.success?200:400).json(result[0])
}


module.exports = {
    getAlumnos,
    getAlumno
}