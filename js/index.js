let option;
let money;
let reason;
let gasto;

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

while(option !==0){
    option = Number(prompt("Ingrese una de las siguientes opciones:!\n1. Registrar ingreso\n2. Registrar gasto\n3. Consultar saldo\n0. Salir"))
    
    switch (option) {
        case 1:
                money = Number(prompt("Ingrese el monto en números sin puntos."));
                reason = prompt("Motivo del ingreso de dinero:");
                recordIncome(money, reason);
            break;
        case 2:
                gasto = Number(prompt("Ingrese el monto en números y sin puntos. "));
                reason = prompt("Motivo del gasto de dinero: ");
                recordIncome (-gasto, reason);
            break;
        case 3:
                sumaWallet();
            break;
        case 0:
                alert("Gracias por pasar, salu2");
            break;
        default:
                alert("Ingrese una opocion valida como las que se muestran en pantalla")
            break;
    }
}

function recordIncome(num, ras) {
    wallet.push({money: num, reason: ras});
}

function sumaWallet() {
    let sumarMoney = wallet.reduce((acc, el) => acc + el.money, 0);
    alert(sumarMoney);
}
