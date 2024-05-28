let totalPuntos = 0
let totalCorrectos = 0
let totalIncorrectos = 0

// variables de puntos positivos
function puntosCorrectos() {
    totalCorrectos++
    totalPuntos++
}
// variables de puntos negativos
function puntosIncorrectos() {
    totalIncorrectos++
    totalPuntos--
}
// función de alerts finales
function avisoFinal() {
    alert(nombreUsuario.toUpperCase() + ': has acertado ' + totalCorrectos + ' preguntas sobre 6')
    alert(nombreUsuario.toUpperCase() + ': has fallado ' + totalIncorrectos + ' preguntas sobre 6')
    alert('Tu total de puntos es de ' + totalPuntos)
}
// función sobre pepe
function nameIsPepe() {
    if (nombreUsuario == "pepe") {
        totalPuntos = 7
        alert('¡Ganaste!')
        alert('Tu total de puntos es de ' + totalPuntos)
    }
}

// bucle de preguntas
// si se aciertan todas, para, si no se llega a los puntos, sigue el bucle hasta conseguir todas las respuestas correctas

while (totalPuntos < 6) {

    nombreUsuario = prompt('¿Cual es tu nombre?').toLowerCase()
    nameIsPepe() 

    if (prompt("¿Cuando se estrenó Psicosis? (Alfred Hitchcock)") === "1960") {
        puntosCorrectos()
    } else {
        puntosIncorrectos()
    }

    if (prompt("¿Cuando se estrenó La Naranja Mecánica? (Stanley Kubrik)") === "1967") {
        puntosCorrectos()
    } else {
        puntosIncorrectos()
    }

    if (prompt("¿Cuando se estrenó Reservoir Dogs (Quentin Tarantino)?") === "1992") {
        puntosCorrectos()
    } else {
        puntosIncorrectos()
    }

    if (prompt("¿Cuando se estrenó Réquiem por un Sueño (Darren Aronofsky)?") === "2000") {
        puntosCorrectos()
    } else {
        puntosIncorrectos()
    }

    if (prompt("¿Cuando se estrenó Whiplash (Damien Chazelle)?") === "2014") {
        puntosCorrectos()
    } else {
        puntosIncorrectos()
    }

    if (prompt("¿Cuando se estrenó Avengers: Endgame (Hermanos Russo)") === "2019") {
        puntosCorrectos()
    } else {
        puntosIncorrectos()
    }

    avisoFinal()
}


