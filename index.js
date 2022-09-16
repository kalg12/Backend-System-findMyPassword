const express = require('express');
const app = express();
const port = 4000;

//Middleware
app.use(express.json());

//Routes
app.use('/', (req,res) => {
    res.send('Hello World');
});

//Ruta para obtener todos los usuarios de la base de datos
app.get('/users', (req,res) => {
    res.send('Obtener todos los usuarios');
});


//Listen
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});