const express = require('express');
const app = express();

const {infoCursos} = require('./cursos.js');

//routing

app.get('/', (req, res) => {
    res.send('Mi primer servidor. Cursos');
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () =>{
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`)
});