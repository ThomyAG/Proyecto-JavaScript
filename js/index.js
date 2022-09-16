let option;
let money;
let reason;
let gasto;
let resto;

const wallet = [
    {
        money: 200,
        reason: "venta",
    },
    {
        money: 250,
        reason: "plata en calle",
    },
];
function sumaWallet() {
    let sumarMoney = wallet.reduce((acc, el) => acc + el.money, 0);
    return (sumarMoney);
}

while(option !==0){
    option = Number(prompt("Ingrese una de las siguientes opciones:!\n1. Registrar ingreso\n2. Registrar gasto\n3. Consultar saldo\n4. Consultar transaccion\n0. Salir"))
    
    switch (option) {
        case 1:
                money = Number(prompt("Ingrese el monto en números sin puntos."));
                reason = prompt("Motivo del ingreso de dinero:");
                recordIncome(money, reason);
            break;
        case 2:
                gasto = Number(prompt("Ingrese el monto en números y sin puntos. "));
                reason = prompt("Motivo del gasto de dinero: ");
                resto = sumaWallet() -gasto;
                if (resto < 0) {
                    alert("Gastas mas dinero de lo que tenes");
                } else{
                    recordIncome (-gasto, reason);
                }
            break;
        case 3:
                resto = sumaWallet();
                document.getElementById("visualizadorDeDatos"). innerHTML = "Tu saldo actual es de $" + resto
            break;
        case 4:
                filtro();
            break;
        case 0:
                alert("Gracias por pasar, salu2");
            break;
        default:
                alert("Ingrese una opcion valida como las que se muestran en pantalla")
            break;
    }
}

function recordIncome(num, ras) {
    wallet.push({money: num, reason: ras});
}

function filtro() {
    while (true){
        let transaccion = Number(prompt("La cantidad de transacciones realizadas es de " + wallet.length + " transacciones.\n Que transaccion desea ver?"));
        if (transaccion > 0 && transaccion <= wallet.length){
        transaccion = transaccion - 1;
        document.getElementById("visualizadorDeDatos"). innerHTML = "La transaccion elegida es de $" + wallet[transaccion].money + ". Motivo: " + wallet[transaccion].reason
        // alert("La transaccion elegida es de " + wallet[transaccion].money + ". Motivo: " + wallet[transaccion].reason);
        break;
        } else {
            alert("Seleccione un valor dentro de las transacciones realizadas");
        }
    }
}