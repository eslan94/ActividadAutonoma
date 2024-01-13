function ingresarNumero(mensaje) {
    return parseFloat(prompt(mensaje));
}

function precioProucto(){

    let precio = ingresarNumero("Ingrese el precio del producto:");
    
    let iva = 0.12;
    let montoIva = precio*iva;
    let precioTotal = precio+montoIva;

    alert(`El precio total del producto es: ${precioTotal}`)
    
}

precioProucto();