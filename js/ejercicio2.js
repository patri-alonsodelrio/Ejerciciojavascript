// algoritmo que pide al usuario que ingrese su nombre mediante un prompt si quiere jugar un partido de futbol. Cuando se llegan a juntar las 10 personas arroja un alert confirmando y se corta el mismo. En de que al confirmar ingrese NO u otra palabra finaliza el bucle.

let confirmado = 1;
let total = 9;

for (personas = 0; personas < 10; personas++) {
    let confirmacion = prompt("Ingresa tu nombre si queres participar del fulbito.");
    let si = prompt("Ingresa SI para confirmar o NO para cancelar.")
    let suma = personas + confirmado;
    let resta = total - personas;
    if (si != "si" && si != "SI") { 
        break
    } else {
        console.log("- " + confirmacion + " confirmado.");
    }
    console.log("Somos " + suma + ". Faltan " + resta + " para que seamos 10 y jugar un fulbito. Ingresa YO si queres participar del fulbito.");
    if (suma >= 10) {
        alert("Fulbito armado y cancha reservada. Nos vemos a las 22hs.")
    }
}


//  algoritmo que pide al usuario que ingrese un numero y devuelve por consola el mensaje Hola la cantidad de veces ingresada

let numeroIngresado = parseInt(prompt("Ingrese un numero"));

for (let i = 1; i <= numeroIngresado; i++) {
    console.log("Hola numero " + i)
}



//bucle que le solicita al usuario que ingrese cualquier texto mediante prompt, concatena el siguiente valor que ingrese y lo devuelve por consola. En caso de que el usuario ingrese ESC en vez de concatenar un texto se cancela el mismo

let textoIngresado = prompt("Ingrese un texto");
let textoConcatenar;

while (textoConcatenar != "ESC") {
    textoConcatenar = prompt("Ingrese el texto que quiere concatenar al inicial o ingrese la palabra 'ESC' para cancelar")
    let resultado = textoIngresado + " " + textoConcatenar;
    console.log(resultado)
}
