function filosofoHipster(profesion = String, nacionalidad = String, cantidadDeKilometros = Number) {
    return profesion === 'Músico' && nacionalidad === 'Argentina' && cantidadDeKilometros > 2
}

function esNumeroDeLaSuerte(n) {
    return n > 0 && (n % 2 === 0 || n % 3 === 0) && n != 15
}

function puedeJubilarse(edad, genero, aporteNecesario) {
    return (edad > 60 && genero === 'F' && aporteNecesario > 30) || (edad > 65 && genero === 'M' && aporteNecesario > 30)
}

function puedeSubirse(alturaPersona = Number, vieneConCompania = Boolean, tieneAfeccionCardiaca = Boolean) {
    return (alturaPersona >= 1.5 && tieneAfeccionCardiaca === false) || (alturaPersona >= 1.2 && alturaPersona < 1.5 && vieneConCompania === true && tieneAfeccionCardiaca === false)
}

function asientosDisponibles(d, a) {
    let respuesta = '';
    for (let i = 0; i < d.length; i++) {

        if (d[i] == a) {
            return respuesta = 'Felicitaciones, el asiento número ' + a + ' está disponible'
        } else {
            respuesta = 'Lo sentimos, el asiento número ' + a + ' está ocupado, pero aún quedan ' + d.length + ' asientos disponibles'
        }
    }
    return respuesta
}

// function reporteDePasajeros(n){
//     let pasajeros = 200;
//     let pasajerosPorEstacion = []
//     for(let i = 0; i <= n; i++){
//         if(i == 0){
//             pasajerosPorEstacion.push('En la estación ' + i + ' hay ' + pasajeros + ' pasajeros arriba del tren'
//         )} else if (i != 5){
//             pasajeros += 20
//             pasajerosPorEstacion.push('En la estación ' + i + ' hay ' + pasajeros + ' pasajeros arriba del tren')
//         } else if(i == 5){
//             pasajeros += 40
//             pasajerosPorEstacion.push('En la estación ' + i + ' hay ' + pasajeros + ' pasajeros arriba del tren')
//         } 
//     }
//     return pasajerosPorEstacion
// }





function reporteDePasajeros(estaciones) {
    let array = [];
    for (let i = 0; i <= estaciones; i++) {
        let pasajeros = 200
        if (i >= 5) {
            pasajeros = pasajeros + i * 20 + 20;
        } else {
            pasajeros = pasajeros + i * 20;
        }
        array.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
    }
    return array;
}
// console.log(reporteDePasajeros(6));


function laClaveSecreta(c) {
    let codigoDescifrado = ''
    for (let i = c.length - 1; i >= 0; i--) {
        if (c[i] == '*') {

        } else {
            codigoDescifrado += c[i]
        }
    }
    return codigoDescifrado
}

// console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]));


function calculadora(num1, operacion, num2) {
    if (operacion == '+') {
        return Number(num1) + Number(num2)
    } else if (operacion == '-') {
        return num1 - num2
    } else if (operacion == '*') {
        if (Number(num1) !== 0 && Number(num2) !== 0) {
            return num1 * num2
        } else {
            return 0
        }
    } else if (operacion == '/') {
        if (Number(num2) !== 0) {
            return num1 / num2
        } else {
            return undefined
        }
    }
}
// console.log(calculadora(27, '/', 3));


let player = {
    name: 'Jonathan',
    alias: 'Animax97',
    id: 12345678,
    rango: ['Diamante']
}
const miau = []
// console.log(miau);

function agregarHttp(url) {
    return 'http://' + url
}

function procesar(a, f) {
    let imprime = a.map(i => f(i))
    return imprime
}