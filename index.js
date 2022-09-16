//Requires
const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;

//Routes import
const dataUsers = require('./src/routes/dataUsers.routes')

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use(dataUsers)

//Listen
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});