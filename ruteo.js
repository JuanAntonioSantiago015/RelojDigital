const express = require('express');
const port = 3000
const app = express();

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.get('/home', (req, res) => {
    res.send('Estás en la parte de inicio');
});

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
});