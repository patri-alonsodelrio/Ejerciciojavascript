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


// DOM


// getElementbyClass para equipo 1 River en todos los campeonatos. 

let celdaEquipo = document.getElementsByClassName("equipo1")


console.log(celdaEquipo[0].innerHTML)

for (equipo of celdaEquipo) {
    console.log(equipo)
    equipo.innerText = `${firstequipo.nombreEquipo}`;
}

// puntaje

let ptsEquipo = document.getElementsByClassName("pts1")

for (pts of ptsEquipo) {
    pts.innerText = `${firstmatch.puntaje}`;
}

// goles favor river plate

let gfEquipo = document.getElementsByClassName("gf1")

for (gf of gfEquipo) {
    gf.innerText = `${firstmatch.golesAFavor}`;
}

// Goles en contra

let gcEquipo = document.getElementsByClassName("gc1")

for (gc of gcEquipo) {
    gc.innerText = `${firstmatch.golesContra}`;
}

//diferencia de goles 

let difEquipo = document.getElementsByClassName("dif1")

for (dif of difEquipo) {
    dif.innerText = `${firstmatch.diferencia}`;
}

// Tabla equipo 2


let celdaEquipo2 = document.getElementById('equipo2')
let nuevoEquipo2 = document.createElement('div');
nuevoEquipo2.innerHTML = `${equipoprimero.nombreEquipo}`;
celdaEquipo2.append(nuevoEquipo2);

// puntaje

let ptsEquipo2 = document.getElementById("pts2")

ptsEquipo2.innerText = `${partido1.puntaje}`;

// goles favor

let gfEquipo2 = document.getElementById("gf2")

gfEquipo2.innerText = `${partido1.golesAFavor}`;


// goles contra

let gcEquipo2 = document.getElementById("gc2")

gcEquipo2.innerText = `${partido1.golesContra}`;


// diferencia

let difEquipo2 = document.getElementById("dif2")

difEquipo2.innerText = `${partido1.diferencia}`;

// Tabla equipo 3

let celdaEquipo3 = document.getElementById('equipo3')
let nuevoEquipo3 = document.createElement('div');
nuevoEquipo3.innerHTML = `${equiposegundo.nombreEquipo}`;
celdaEquipo3.append(nuevoEquipo3);

// puntaje

let ptsEquipo3 = document.getElementById("pts3")

ptsEquipo3.innerText = `${partido2.puntaje}`;

// goles favor

let gfEquipo3 = document.getElementById("gf3")

gfEquipo3.innerText = `${partido2.golesAFavor}`;


// goles contra

let gcEquipo3 = document.getElementById("gc3")

gcEquipo3.innerText = `${partido2.golesContra}`;


// diferencia

let difEquipo3 = document.getElementById("dif3")

difEquipo3.innerText = `${partido2.diferencia}`;


// Tabla equipo 4

let celdaEquipo4 = document.getElementById('equipo4')
let nuevoEquipo4 = document.createElement('div');
nuevoEquipo4.innerHTML = `${equipotercero.nombreEquipo}`;
celdaEquipo4.append(nuevoEquipo4);


// puntaje

let ptsEquipo4 = document.getElementById("pts4")

ptsEquipo4.innerText = `${partido3.puntaje}`;

// goles favor

let gfEquipo4 = document.getElementById("gf4")

gfEquipo4.innerText = `${partido3.golesAFavor}`;


// goles contra

let gcEquipo4 = document.getElementById("gc4")

gcEquipo4.innerText = `${partido3.golesContra}`;


// diferencia

let difEquipo4 = document.getElementById("dif4")

difEquipo4.innerText = `${partido3.diferencia}`;



