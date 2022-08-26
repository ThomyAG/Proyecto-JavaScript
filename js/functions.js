// Ejercicio de clase 2 - Control de flujos

// const userAge = Number(prompt("Para seguir navegando necesitamos saber tu edad, ingresala debajo."))
// if (userAge <= 12) {
//     alert (" Estoy llamando a tus viejos! ILEGALISIMO");
// } else if (userAge <=16) {
//     alert("Anda a jugar a la play, estas lejos de poder tomar ✨amig@✨");
// } else if (userAge == 17) {
//     alert ("Sorry, no podes ingresar ⛔, pero te falta poco...volvé en 1 año");
// } else {
//     alert ("Buenisimo, tenes el minimo de edad necesario para ingresar, compra tranquilo. Se responsable");
// }

// Ejercicio de la clase 3 - Ciclos / Iteraciones

const userNumber = Number(prompt("Queres saber cuantas veces se puede restar un numero por 1 hasta llegar a 0? Averigualo aca. (UTILIZA SOLO NUMEROS POSITIVOS)"))

for (let i = userNumber ; i >= 0 ; i--){
    alert ("La cantidad de veces que podes restar tu número son " + i + " veces.")
}
Date