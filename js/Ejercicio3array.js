// Clases constructoras de campeonatos y equipos, que son objetos y que dentro contienen un array.

class Campeonatos {
    constructor(nombre, nacionalidad) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.equipos = [];
    }

    agregarEquipo(equipo) {
        this.equipos.push(equipo)
    }

    obtenerEquipo(nombreEquipo) {
        return this.equipos.find((equipo) => (equipo.nombreEquipo == nombreEquipo));
    }
}

// Constructor de objetos Campeonatos

let campeonato1 = new Campeonatos('CampeonatoArg', 'Nacional');
let campeonato2 = new Campeonatos('CopaArgentina', 'Nacional');
let campeonato3 = new Campeonatos('CopaLibertadores', 'Internacional');

class Equipos {
    constructor(nombreEquipo, nacionalidad) {
        this.nombreEquipo = nombreEquipo;
        this.nacionalidad = nacionalidad;
        this.estadistica = [];
    }

    agregarPartido(partido) {
        this.estadistica.push(partido)
    }

}

// Construccion de equipo estatico en los tres campeonatos

let firstequipo = new Equipos('River Plate', 'Argentina')

campeonato1.agregarEquipo(firstequipo);
campeonato2.agregarEquipo(firstequipo);
campeonato3.agregarEquipo(firstequipo);


// Construccion de equipos dinamicos ingresados por el usuario y pusheados mediante funcion al array Equipos dentro del Objeto Campeonato

let equipo1 = prompt('ingrese el equipo a agregar al Campeonato argentino');
let nacionalidad1 = prompt('ingrese la nacionalidad de su equipo');
let equipoprimero = new Equipos(equipo1,nacionalidad1);
campeonato1.agregarEquipo(equipoprimero);

let equipo2 = prompt('ingrese el equipo a agregar a la Copa argentina');
let nacionalidad2 = prompt ('ingrese la nacionalidad de su equipo');
let equiposegundo = new Equipos(equipo2,nacionalidad2);
campeonato2.agregarEquipo(equiposegundo);

let equipo3 = prompt('ingrese el equipo a agregar a la Copa Libertadores');
let nacionalidad3 = prompt ('ingrese la nacionalidad de su equipo');
let equipotercero = new Equipos(equipo3,nacionalidad3);
campeonato3.agregarEquipo(equipotercero);

// Creacion de objeto estadisticas

class Estadisticas {
    constructor(puntaje, golesAFavor, golesContra, diferencia) {
        this.puntaje = puntaje;
        this.golesAFavor = golesAFavor;
        this.golesContra = golesContra;
        this.diferencia = diferencia;
    }

    obtenerPuntaje() {
        return this.puntaje;
    }

}

// Creacion de puntaje estatico de primero equipo

let firstmatch = new Estadisticas(6, 9, 0, 9);
firstequipo.agregarPartido(firstmatch);

// Declaracion de variables parar la estadistica del equipo 1

let puntaje1 = 0;
let golesAFavor1 = 0;
let golesContra1 = 0;
let diferencia1 = 0;

// Ingreso de los datos del primer partido por el usuario y condicional a los fines de obtener el puntaje segun si gana, pierde o empata el partido

let resultado1 = parseInt(prompt(`Partido 1 ${equipoprimero.nombreEquipo}: Ingrese 1 si ${equipoprimero.nombreEquipo} gano, 2 si empato, 3 si perdio`));

if (resultado1 == 1) {
    resultado1 = 3
} else if (resultado1 == 2){
    resultado1 = 1
} else if (resultado1 == 3) {
    resultado1 = 0
}

// Solicitud al usuario de ingreso de los goles a favor y en contra

let gf1 = parseInt(prompt(`Ingrese goles a favor del ${equipoprimero.nombreEquipo}`));
let gc1 = parseInt(prompt(`Ingrese goles en contra del ${equipoprimero.nombreEquipo}`));

// Solicitud de ingreso de los datos del partido numero 2

let resultado11 = parseInt(prompt(`Partido 2 ${equipoprimero.nombreEquipo}: Ingrese 1 si ${equipoprimero.nombreEquipo} gano, 2 si empato, 3 si perdio`));

if (resultado11 == "1") {
    resultado11 = 3
} else if (resultado1 == "2"){
    resultado11 = 1
} else if (resultado1 == "3") {
    resultado11 = 0
}


let gf11 = parseInt(prompt(`Ingrese goles a favor del ${equipoprimero.nombreEquipo}`));
let gc11 = parseInt(prompt(`Ingrese goles en contra del ${equipoprimero.nombreEquipo}`));

// Operaciones en las variables a los fines de obtener el puntaje exacto

puntaje1 = resultado1 += resultado11;
golesAFavor1 = gf1 += gf11;
golesContra1 = gc1 += gc11;
diferencia1 = golesAFavor1 - golesContra1;

// Push de las estadisticas al array correspondiente

let partido1 = new Estadisticas(puntaje1,golesAFavor1,golesContra1,diferencia1);
equipoprimero.agregarPartido(partido1);

// Mismo codigo para el Equipo numero 2

let puntaje2 = 0;
let golesAFavor2 = 0;
let golesContra2 = 0;
let diferencia2 = 0;

let resultado2 = parseInt(prompt(`Partido 1 ${equiposegundo.nombreEquipo}: Ingrese 1 si ${equiposegundo.nombreEquipo} gano, 2 si empato, 3 si perdio`));

if (resultado2 == 1) {
    resultado2 = 3
} else if (resultado2 == 2){
    resultado2 = 1
} else if (resultado2 == 3) {
    resultado2 = 0
}

let gf2 = parseInt(prompt(`Ingrese goles a favor del ${equiposegundo.nombreEquipo}`));
let gc2 = parseInt(prompt(`Ingrese goles en contra del ${equiposegundo.nombreEquipo}`));

let resultado22 = parseInt(prompt(`Partido 2 ${equiposegundo.nombreEquipo}: Ingrese 1 si ${equiposegundo.nombreEquipo} gano, 2 si empato, 3 si perdio`));

if (resultado22 == 1) {
    resultado22 = 3
} else if (resultado22 == 2){
    resultado22 = 1
} else if (resultado22 == 3) {
    resultado22 = 0
}

let gf22 = parseInt(prompt(`Ingrese goles a favor del ${equiposegundo.nombreEquipo}`));
let gc22 = parseInt(prompt(`Ingrese goles en contra del ${equiposegundo.nombreEquipo}`));


puntaje2 = resultado2 += resultado22;
golesAFavor2 = gf2 += gf22;
golesContra2 = gc2 += gc22;
diferencia2 = golesAFavor2 - golesContra2;

let partido2 = new Estadisticas(puntaje2,golesAFavor2,golesContra2, diferencia2);
equiposegundo.agregarPartido(partido2);

// Mismo codigo para el Equipo numero 3


let puntaje3 = 0;
let golesAFavor3 = 0;
let golesContra3 = 0;
let diferencia3 = 0;

let resultado3 = parseInt(prompt(`Partido 1 ${equipotercero.nombreEquipo}: Ingrese 1 si ${equipotercero.nombreEquipo} gano, 2 si empato, 3 si perdio`));

if (resultado3 == 1) {
    resultado3 = 3
} else if (resultado3 == 2){
    resultado3 = 1
} else if (resultado3 == 3) {
    resultado3 = 0
}

let gf3 = parseInt(prompt(`Ingrese goles a favor del ${equipotercero.nombreEquipo}`));
let gc3 = parseInt(prompt(`Ingrese goles en contra del ${equipotercero.nombreEquipo}`));

let resultado33 = parseInt(prompt(`Partido 2 ${equipotercero.nombreEquipo}: Ingrese 1 si ${equipotercero.nombreEquipo} gano, 2 si empato, 3 si perdio`));

if (resultado33 == 1) {
    resultado33 = 3
} else if (resultado33 == 2){
    resultado33 = 1
} else if (resultado33 == 3) {
    resultado33 = 0
}

let gf33 = parseInt(prompt(`Ingrese goles a favor del ${equipotercero.nombreEquipo}`));
let gc33 = parseInt(prompt(`Ingrese goles en contra del ${equipotercero.nombreEquipo}`));

puntaje3 = resultado3 += resultado33;
golesAFavor3 = gf3 += gf33;
golesContra3 = gc3 += gc33;
diferencia3 = golesAFavor3 - golesContra3;


let partido3 = new Estadisticas(puntaje3,golesAFavor3,golesContra3, diferencia3);
equipotercero.agregarPartido(partido3);


 //Logueo del array dentro de el objeto Campeonatos

console.log(campeonato1);
console.log(campeonato2);
console.log(campeonato3);


// // Logueo en Consola de los equipos

console.log(firstequipo);
console.log(equiposegundo);
console.log(equipoprimero);
console.log(equipotercero);


// Utilizacion de la funcion de orden superior find para encontrar a equipo

console.log(campeonato1.obtenerEquipo('River Plate'))




