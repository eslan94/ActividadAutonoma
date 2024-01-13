function ingresarNumero(mensaje) {
    return parseFloat(prompt(mensaje));
}

function operaciones() {
    
    let numero1 = ingresarNumero("Ingrese el primer número:");
    let numero2 = ingresarNumero("Ingrese el segundo número:");

    
    let opcion = prompt("Seleccione una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir");

    
    switch (opcion) {
        case "1":
            alert("La suma es: " + (numero1 + numero2));
            break;
        case "2":
            alert("La resta es: " + (numero1 - numero2));
            break;
        case "3":
            alert("La multiplicación es: " + (numero1 * numero2));
            break;
        case "4":
            if (numero2 !== 0) {
                alert("La división es: " + (numero1 / numero2));
            } else {
                alert("No se puede dividir por cero.");
            }
            break;
        default:
            alert("Opción no válida");
    }
}

// Llamar a la función principal
operaciones();
