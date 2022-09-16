const express = require('express');
const app = express();
const port = 4000;

const dataUsers = require('./src/routes/dataUsers.routes')

//Middleware
app.use(express.json());

//Routes
app.use(dataUsers)

//Listen
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});