const {Router} = require('express');
const { getAlumnos } = require('../controllers/dataUsers.ctrl');

const router = Router();

router.get('/usuarios', getAlumnos)

module.exports = router;