const http = require('http');

//creamos servidor y definimos el puerto 3000 0 8080
//http.createServer((req,res)
http.createServer((solicitud, respuesta) => {
    //enviando un json
    respuesta.writeHead(200, { 'content-type': 'application/json' });
    let salida = {
        nombre: 'katriel',
        genero: 'M',
        url: solicitud.url

    }

    respuesta.write(JSON.stringify(salida));
    //enviando un texto plano
    respuesta.write('\nhola katriel');
    respuesta.end(); //obligatorio para que finalize la respuesta

}).listen(8080);
console.log("escuchando por puerto 8080");