// Primer desafio entregable

alert ("Bienvenid@ al calculador de frigorías para tu ambiente. Si te estas por comprar un aire acondicionado y necesitas saber las frigorías necesarias, estás en el lugar indicado.")
alert ("Deberás completar los campos con ciertos datos de tu ambiente, así que, tené a mano algo para medir, y manos a la obra 👷🏻‍♀️.")

while (isNaN(nLong) && isNaN(nWidth) && isNaN(nHeigth)) {

    var nLong = Number(prompt("Ingresá el largo (en metros) del ambiente en cuestión"));
    var nWidth = Number(prompt("Ingresá el ancho (en metros) del ambiente"));
    var nHeigth = Number(prompt("Ingresá el alto (en metros) del ambiente"));
    }

let result = 0
function volume(nLong, nWidth, nHeigth) {
    result = nLong * nWidth * nHeigth;
}
volume(nLong, nWidth, nHeigth)

let frig = Number(result * 50)

if (frig == 0){
    alert("Por favor, ingrese medidas válidas")
} else if (frig <= 2500) {
    alert("Necesitas un aire acondicionado de 2250 frigorias/h");
} else if(frig <=3700) {
    alert("Tú habitación es mediana, te recomendamos un aire acondicionado de 3000 frigorias/horas");
} else if(frig <=4800) {
    alert("Lindo ambiente, te recomendamos comprar un aire acondicionado de 4500 frigorias x hora");
}else {
    alert("Te recomendamos contactarte con un profesional para gestionar mejor tu caso")
}

/* Recomendaciones para hacer funcionar los distintos "else".
- Para activar el alert de 2250, utilizar como refenrecia un ambiente de hasta 50 m2. Ej: 4 * 3 * 3
- Para activar el alert de 3000, utilizar como referencia un ambiente de hasta 60 m2. Ej: 5 * 4 * 3
- Para activar el alert de 4500, utilizar como referencia un ambiente de hasta 94 m2. Ej: 6 * 4 * 3.5*/