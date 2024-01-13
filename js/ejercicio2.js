function ingresarNumero(mensaje) {
    return parseFloat(prompt(mensaje));
}

function promedioEstudiante(){

    let nota1 = ingresarNumero("Ingrese la primera nota:");
    let nota2 = ingresarNumero("Ingrese la segunda nota:");
    let nota3 = ingresarNumero("Ingrese la tercera nota:")

    if((nota1,nota2,nota3)>=0 && (nota1,nota2,nota3)<=10){
        let promedio = (nota1+nota2+nota3)/3;

        if(promedio >=6 && promedio <=10){
            alert(`Su promedio es ${promedio}` );
            alert(`Estado: APROBADO`);
        }else{
            alert(`Su promedio es ${promedio}` );
            alert(`Estado: REPROBADO`);
        }
        return promedio;
    }else{
        alert("Las notas ingresadas no son válidas")
    }

    
}

promedioEstudiante();



