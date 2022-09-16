const {Router} = require('express');
const { getAlumnos, getAlumno } = require('../controllers/dataUsers.ctrl');

const router = Router();

router.get('/usuarios', getAlumnos)
router.get('/:CURP', getAlumno)

module.exports = router;