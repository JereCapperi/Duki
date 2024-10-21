const fechaObjetivo = new Date("2024-10-31T20:59:59").getTime();

// Actualiza el contador cada segundo
const x = setInterval(function() {

    const ahora = new Date().getTime();

    const distancia = fechaObjetivo - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "¡La cuenta regresiva ha terminado!";
    }
}, 1000);
