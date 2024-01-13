
function descuentoModelo() {
    
     
    let opcion = prompt("Seleccione el vehículo:\n1. Ford Fiesta\n2. Ford Focus");
    let descuento = 0;
    
    switch (opcion) {
        case "1":
            document.writeln("Este vehículo tiene un descuento del 5%")
            break;
        case "2":
            document.writeln("Este vehículo tiene un descuento del 10%")
            break;
        default:
            alert("Opción no válida");
    }
}

descuentoModelo();