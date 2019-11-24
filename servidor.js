const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');
//busca un puerto en heroku globalmente en 
//caso no exista lo hace local host 3000
const puerto = process.env.PORT || 3000;

//hacemos visibles todos los archivos de esta carpeta
//por defecto busca al index de la carpeta publico
app.use(express.static(__dirname + '/publico'));
//Partes de una pagina
hbs.registerPartials(__dirname + '/views/partes');

//express HBS(handelbar) engine
app.set('view engine', 'hbs');


app.get('/', (solicitud, respuesta) => {
    respuesta.render('home', {
        nombre: 'osti katriel ',

    });
});
app.get('/about', (solicitud, respuesta) => {

    respuesta.render('about', {

    });

});


app.listen(puerto, () => {

    console.log(`Escuchando peticiones por el puerto ${puerto}`);
});