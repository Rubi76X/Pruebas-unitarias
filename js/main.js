//JSON le va a permitir a npm saber que paquete instalar
//se hable cmd en la ruta de la carpeta del archivo, se úede acceder a cmd, colocando cmd en la barra que tiene la ruta
// se corre el comando "npm install --save-dev jest" sin comillas para instalar la libreria de jest desde internet
//al finalizar la descarga se va aparecer una carpeta node_modules
//ahora se van a llevar las funciones a "jest", se le va a indicar que desde un aechivo externo se van a ejecutar
// module.exports = suma; se va atomar la funcion sima y se va hacer la exportacion
// se realia un requiere en main.test.js y se le pone la direccion de este archivo
//en main.test.js se le indica que se haga una prueba, se pone el texto que aparecera "sumar dos numeros 2+2=4" y que haga una funcion
//despues se indica cual es el valor que se esta esperando y de quien(funcion suma) y esto que tiene que ser
//despues se hace la prueba en cmd, se corre el comando "npm run test"

function suma(a, b){
    return a*b;
}//suma

function multiplicar(a,b){
    return a*b;
}

module.exports = suma;