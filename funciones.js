function trasladar(unArray, otroArray) {
    otroArray.push(unArray.pop())
}

function medallaSegunPuesto(n) {
    let medallas = ['Oro', 'Plata', 'Bronce']
    if (n <= 3) {
        return medallas[n - 1]
    } else {
        return 'Seguí participando'
    }
}

function imprimir5veces5() {
    for (let i = 1; i <= 5; i++) {
        console.log(5)
    }
}

function pasitoAPasito() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

function pasandoPorI() {
    for (let i = 0; i < 5; i++) {
        console.log("acá i tiene el valor de " + i);
    }
}

function pasandoPorLosPares() {
    for (let i = 0; i <= 6; i += 2) {
        console.log("acá i tiene el valor de " + i);
    }
}

function imprimirAzul(n) {
    for (let i = 1; i <= n; i++) {
        console.log("Azul")
    }
}

function sumar5MonedasDe25Centavos() {
    let totalDinero = 0
    for (let i = 1; i <= 5; i++) {
        totalDinero = totalDinero + 0.25;
    }
    return totalDinero
}

function sumarMonedasDe25(cantidadDeMonedas) {
    let totalDinero = 0
    for (let i = 1; i <= cantidadDeMonedas; i++) {
        totalDinero = totalDinero + 0.25;
    }
    return totalDinero
}

function sumaDeLosParesDel0Al(x) {
    let pares = 0
    for (let i = 0; i <= x; i += 2) {
        pares = pares + i;
    }
    return pares
}

function sumatoriaHasta(x = Number) {
    let sumaTotal = 0
    for (let i = 0; i < x; i++) {
        sumaTotal = sumaTotal + i;
    }
    return sumaTotal
}

function caloriasDeTrote(x = Number) {
    let vueltas = 0
    for (let i = 0; i <= x; i++) {
        vueltas = vueltas + 5 * i;
    }
    return vueltas
}
console.log(caloriasDeTrote(5));

function gananciaTotal4(x) {
    let gananciasTotales = 0
    for (let i = 0; i < 4; i++) {
        gananciasTotales = gananciasTotales + x[i];
    }
    return gananciasTotales
}

function sumatoriaDeGanancias(x) {
    let gananciasTotales = 0
    for (let i = 0; i < x.length; i++) {
        gananciasTotales = gananciasTotales + x[i];
    }
    return gananciasTotales
}

function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        if (unPeriodo[i] > 0) {
            cantidad = cantidad + 1
        }
    }
    return cantidad;
}

function saldosDeMesesConGanancia(x) {
    let cantidad = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            cantidad.push(x[i])
        }
    }
    return cantidad;
}

function cantidadDeMesesConPerdida(x) {
    let cantidad = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            cantidad = cantidad + 1
        }
    }
    return cantidad;
}

function naipes(x) {
    let cantidad = [];
    for (let i = 1; i <= 12; i++) {
        if (i != 8 && i != 9) {
            cantidad.push(i + " de " + x)
        }
    }
    return cantidad;
}

function factorial(x) {
    let cantidad = 1;
    for (let i = 1; i <= x; i++) {
        cantidad = cantidad * i
    }
    return cantidad;
}

function productoria(x) {
    let cantidad = 1;
    for (let i = 0; i < x.length; i++) {
        cantidad = cantidad * x[i]
    }
    return cantidad;
}

function alturaArbolUtopico(n) {
    let altura = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            altura = altura + 1
        } else {
            altura = altura * 2
        }
    }
    return altura;
}

function masMenos(n) {
    let positivos = 0;
    let ceros = 0;
    let negativos = 0;
    let porcentajes = []
    for (let i = 0; i < n.length; i++) {
        if (n[i] > 0) {
            positivos = positivos + 1
        } else if (n[i] == 0) {
            ceros = ceros + 1
        } else {
            negativos = negativos + 1
        }
    }
    porcentajes.push(positivos / n.length)
    porcentajes.push(ceros / n.length)
    porcentajes.push(negativos / n.length)
    return porcentajes;
}

const passwordRandom = () => {
    let text = "";
    let possibilityMinus = "abcdefghijklmnopqrstuvwxyz"
    let possibilityMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let possibilityNumber = "0123456789"
    for (let i = 0; i < 6; i++)
        text += possibilityMinus.charAt(Math.floor(Math.random() * possibilityMinus.length));
    text += possibilityMayus.charAt(Math.floor(Math.random() * possibilityMayus.length));
    text += possibilityNumber.charAt(Math.floor(Math.random() * possibilityNumber.length));
    return text;
}

