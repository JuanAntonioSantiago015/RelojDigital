const express = require('express');
var app = express();

app.use(express.static('./public'));
app.listen(3000);

console.log('Express iniciado');

/*Con express, podemos montar servidores de una forma muy sencilla,
ya que aquí nos está mostrando de una vez todo el contenido que se espera de
la página web.

Se le pone static porque es una página estática*/