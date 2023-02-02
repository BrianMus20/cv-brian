
//probar todo esto en la consola del navegador

//for (inicializacion; condicion; incremento/decremento)
//Este tipo de iterador se utiliza cuando el valor limite de "x" es conocido.
var x = 0;

for (x; x < 5; x++) {
    console.log("el valor de x es: "+x)//Sentencia
}


//Otro Ejemplo pero ahora de decremento

var y = 10;

for (y; y > 0; y--) {
    console.log("el valor de x es: "+y)//Sentencia
}


//while (se utiliza cuando no se conoce el limite de la variable)

var z = 10

while (z > 0) {
    console.log("Mi variable vale "+z);
    z--;
}

//do-while (se utiliza cuando primero se quiere ejecutar la sentancia una vez, y despues hacer la pregunta)

var w = 10

do {
    console.log("Mi variable vale: "+w)
} while (w > 10);


//break (se utiliza para salir del ciclo de iteracion con una segunda condicion)

var q = 10;

for (q; q > 0; q--) {
    if (q == 5){
        break;
    }
    console.log("el valor de q es: "+q)//Sentencia
}

//continue (se utiliza para continuar un ciclo de iteracion con una segunda condicion)