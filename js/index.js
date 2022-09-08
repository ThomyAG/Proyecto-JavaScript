let option;

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

const sumWallet = wallet.reduce((acc, el) => ({
...acc,
    [el.money]: el,
}), {})




console.log(sumWallet)

while(option !==0){
    option = Number(prompt("Ingrese una de las siguientes opciones:!\n1. Registrar ingreso\n2. Registrar gasto\n3. Consultar saldo\n0. Salir"))
    
    switch (option) {
        case 1:
                let money = Number(prompt("Ingrese el monto en números sin puntos"));
                let reason = prompt("Motivo del ingreso de dinero:");
                recordIncome(money, reason);
                console.log(recordIncome)
            break;
        case 2:
                alert("Se ingreso la opcion Nº " + option);
            break;
        case 3:
                console.log(sumWallet);
            break;
        case 0:
                alert("Gracias por pasar, salu2");
            break;
        default:
                alert("Ingrese una opocion valida como las que se muestran en pantalla")
            break;
    }
}

function recordIncome(money, reason) {
    wallet.push({
        money,
        reason,
    });
}
// function getAllrecords
// function recordExpense