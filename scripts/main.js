import * as campeonatos from "./ClaseCampeonatos.js";
import * as equipos from "./ClaseEquipos.js";
import * as estadisticas from "./ClaseEstadisticas.js"

document.addEventListener("DOMContentLoaded", function () {
// Constructor de objetos Campeonatos

let campeonato1 = new campeonatos.Campeonatos('CampeonatoArg', 'Nacional');
let campeonato2 = new campeonatos.Campeonatos('CopaArgentina', 'Nacional');
let campeonato3 = new campeonatos.Campeonatos('CopaLibertadores', 'Internacional');

// Construccion de equipo estatico en los tres campeonatos

let firstequipo = new equipos.Equipos('River Plate', 'Argentina')

campeonato1.agregarEquipo(firstequipo);
campeonato2.agregarEquipo(firstequipo);
campeonato3.agregarEquipo(firstequipo);

//Toma de ELEMTOS POR ID DOM

let nombreEquipo1 = document.getElementById('nombreEquipo1')
let nombreEquipo2 = document.getElementById('nombreEquipo2')
let nombreEquipo3 = document.getElementById('nombreEquipo3')

let res1 = document.getElementById('Res1')
let gfRes1 = document.getElementById('IngGf1')
let gcRes1 = document.getElementById('IngGc1')
let res11 = document.getElementById('Res11')
let gfRes11 = document.getElementById('IngGf11')
let gcRes11 = document.getElementById('IngGc11')

let res2 = document.getElementById('Res2')
let gfRes2 = document.getElementById('IngGf2')
let gcRes2 = document.getElementById('IngGc2')
let res22 = document.getElementById('Res22')
let gfRes22 = document.getElementById('IngGf22')
let gcRes22 = document.getElementById('IngGc22')

let res3 = document.getElementById('Res3')
let gfRes3 = document.getElementById('IngGf3')
let gcRes3 = document.getElementById('IngGc3')
let res33 = document.getElementById('Res33')
let gfRes33 = document.getElementById('IngGf33')
let gcRes33 = document.getElementById('IngGc33')


let celdaEquipo2 = document.getElementById('equipo2')
let celdaEquipo3 = document.getElementById('equipo3')
let celdaEquipo4 = document.getElementById('equipo4')


// Equipo estatico 


// Creacion de puntaje estatico de primero equipo

let firstmatch = new estadisticas.Estadisticas(6, 9, 0, 9);
firstequipo.agregarPartido(firstmatch);

// Declaracion de variables parar la estadistica del equipo 1

let puntaje1 = 0;
let golesAFavor1 = 0;
let golesContra1 = 0;
let diferencia1 = 0;


// getElementbyClass para equipo 1 River en todos los campeonatos. 

let celdaEquipo = document.getElementsByClassName("equipo1")

console.log(celdaEquipo)

console.log(celdaEquipo[0].innerHTML)

for (let team of celdaEquipo) {
    console.log(team)
    team.innerHTML = `${firstequipo.nombreEquipo}`;
}

// puntaje

let ptsEquipo = document.getElementsByClassName("pts1")

for (let pts of ptsEquipo) {
    pts.innerText = `${firstmatch.puntaje}`;
}

// goles favor river plate

let gfEquipo = document.getElementsByClassName("gf1")

for (let gf of gfEquipo) {
    gf.innerText = `${firstmatch.golesAFavor}`;
}

// Goles en contra

let gcEquipo = document.getElementsByClassName("gc1")

for (let gc of gcEquipo) {
    gc.innerText = `${firstmatch.golesContra}`;
}

//diferencia de goles 

let difEquipo = document.getElementsByClassName("dif1")

for (let dif of difEquipo) {
    dif.innerText = `${firstmatch.diferencia}`;
}


// EVENTO SUBMIT

    let botonEnviar = document.getElementById('botonEnviar')
    botonEnviar.addEventListener('submit', (e)=>{
        e.preventDefault()
        celdaEquipo2.innerHTML = nombreEquipo1.value
        celdaEquipo3.innerHTML = nombreEquipo2.value
        celdaEquipo4.innerHTML = nombreEquipo3.value

        
    // Construccion de equipos dinamicos ingresados por el usuario y pusheados mediante funcion al array Equipos dentro del Objeto Campeonato


    let equipo1 = nombreEquipo1.value;
    let equipoprimero = new equipos.Equipos(equipo1);
    campeonato1.agregarEquipo(equipoprimero);


    let equipo2 = nombreEquipo2.value;
    let equiposegundo = new equipos.Equipos(equipo2);
    campeonato2.agregarEquipo(equiposegundo);


    let equipo3 = nombreEquipo3.value;;
    let equipotercero = new equipos.Equipos(equipo3);
    campeonato3.agregarEquipo(equipotercero);


    // Ingreso de los datos del primer partido por el usuario y condicional a los fines de obtener el puntaje segun si gana, pierde o empata el partido



    let resultado1 = parseInt(res1.value) //parseInt(prompt(`Partido 1 ${equipoprimero.nombreEquipo}: Ingrese 1 si ${equipoprimero.nombreEquipo} gano, 2 si empato, 3 si perdio`));

    if (res1.value == 1) {
        resultado1 = 3
    } else if (res1.value == 2){
        resultado1 = 1
    } else if (res1.value == 3) {
        resultado1 = 0
    }

    // Solicitud al usuario de ingreso de los goles a favor y en contra

    let gf1 = parseInt(gfRes1.value) //parseInt(prompt(`Ingrese goles a favor del ${equipoprimero.nombreEquipo}`));
    let gc1 = parseInt(gcRes1.value) //parseInt(prompt(`Ingrese goles en contra del ${equipoprimero.nombreEquipo}`));

    // Solicitud de ingreso de los datos del partido numero 2

    let resultado11 = res11.value //parseInt(prompt(`Partido 2 ${equipoprimero.nombreEquipo}: Ingrese 1 si ${equipoprimero.nombreEquipo} gano, 2 si empato, 3 si perdio`));

    if (res11.value == 1) {
        resultado11 = 3
    } else if (res11.value == 2){
        resultado11 = 1
    } else if (res11.value == 3) {
        resultado11 = 0
    }


    let gf11 = parseInt(gfRes11.value) //parseInt(prompt(`Ingrese goles a favor del ${equipoprimero.nombreEquipo}`));
    let gc11 = parseInt(gcRes11.value) //parseInt(prompt(`Ingrese goles en contra del ${equipoprimero.nombreEquipo}`));

    // Operaciones en las variables a los fines de obtener el puntaje exacto

    puntaje1 = resultado1 + resultado11;
    golesAFavor1 = gf1 + gf11;
    golesContra1 = gc1 + gc11;
    diferencia1 = golesAFavor1 - golesContra1;

    

    // Push de las estadisticas al array correspondiente

    let partido1 = new estadisticas.Estadisticas(puntaje1,golesAFavor1,golesContra1,diferencia1);
    equipoprimero.agregarPartido(partido1);

    // Mismo codigo para el Equipo numero 2

    let puntaje2 = 0;
    let golesAFavor2 = 0;
    let golesContra2 = 0;
    let diferencia2 = 0;

    let resultado2 = parseInt(res2.value)  //parseInt(prompt(`Partido 1 ${equiposegundo.nombreEquipo}: Ingrese 1 si ${equiposegundo.nombreEquipo} gano, 2 si empato, 3 si perdio`));

    if (res2.value == 1) {
        resultado2 = 3
    } else if (res2.value == 2){
        resultado2 = 1
    } else if (res2.value == 3) {
        resultado2 = 0
    }

    let gf2 = parseInt(gfRes2.value) //(prompt(`Ingrese goles a favor del ${equiposegundo.nombreEquipo}`));
    let gc2 = parseInt(gcRes2.value) //(prompt(`Ingrese goles en contra del ${equiposegundo.nombreEquipo}`));

    let resultado22 = parseInt(res22.value)   //parseInt(prompt(`Partido 2 ${equiposegundo.nombreEquipo}: Ingrese 1 si ${equiposegundo.nombreEquipo} gano, 2 si empato, 3 si perdio`));

    if (res22.value == 1) {
        resultado22 = 3
    } else if (res22.value == 2){
        resultado22 = 1
    } else if (res22.value == 3) {
        resultado22 = 0
    }

    let gf22 = parseInt(gfRes22.value) //parseInt(prompt(`Ingrese goles a favor del ${equiposegundo.nombreEquipo}`));
    let gc22 = parseInt(gcRes22.value) //parseInt(prompt(`Ingrese goles en contra del ${equiposegundo.nombreEquipo}`));


    puntaje2 = resultado2 += resultado22;
    golesAFavor2 = gf2 += gf22;
    golesContra2 = gc2 += gc22;
    diferencia2 = golesAFavor2 - golesContra2;

    let partido2 = new estadisticas.Estadisticas(puntaje2,golesAFavor2,golesContra2, diferencia2);
    equiposegundo.agregarPartido(partido2);

    // Mismo codigo para el Equipo numero 3


    let puntaje3 = 0;
    let golesAFavor3 = 0;
    let golesContra3 = 0;
    let diferencia3 = 0;

    let resultado3 = parseInt(res3.value) //parseInt(prompt(`Partido 1 ${equipotercero.nombreEquipo}: Ingrese 1 si ${equipotercero.nombreEquipo} gano, 2 si empato, 3 si perdio`));

    if (res3.value == 1) {
        resultado3 = 3
    } else if (res3.value == 2){
        resultado3 = 1
    } else if (res3.value == 3) {
        resultado3 = 0
    }

    let gf3 = parseInt(gfRes3.value) //parseInt(prompt(`Ingrese goles a favor del ${equipotercero.nombreEquipo}`));
    let gc3 = parseInt(gcRes3.value) //parseInt(prompt(`Ingrese goles en contra del ${equipotercero.nombreEquipo}`));

    let resultado33 = parseInt(res33.value) //parseInt(prompt(`Partido 2 ${equipotercero.nombreEquipo}: Ingrese 1 si ${equipotercero.nombreEquipo} gano, 2 si empato, 3 si perdio`));

    if (res33.value == 1) {
        resultado33 = 3
    } else if (res33.value== 2){
        resultado33 = 1
    } else if (res33.value == 3) {
        resultado33 = 0
    }

    let gf33 = parseInt(gfRes33.value) //parseInt(prompt(`Ingrese goles a favor del ${equipotercero.nombreEquipo}`));
    let gc33 = parseInt(gcRes33.value)//parseInt(prompt(`Ingrese goles en contra del ${equipotercero.nombreEquipo}`));

    puntaje3 = resultado3 += resultado33;
    golesAFavor3 = gf3 += gf33;
    golesContra3 = gc3 += gc33;
    diferencia3 = golesAFavor3 - golesContra3;


    let partido3 = new estadisticas.Estadisticas(puntaje3,golesAFavor3,golesContra3, diferencia3);
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


    //Tabla equipo 2

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

    // JSON STORAGE

    //Guardo en el Storage el objeto que es mi primer equipo de la tabla de posiciones

    let enJSON = JSON.stringify(firstequipo)

    console.log(enJSON)

    localStorage.setItem('Primer Equipo', enJSON)

    let equipoParseado = JSON.parse(localStorage.getItem('Primer Equipo'))

    // luego de parsear el JSON se obtiene por consola el nombre del equipo

    console.log(equipoParseado.nombreEquipo)

    // optimizacion proyecto
    puntaje1 >= 6  && console.log(`El club ${equipoprimero.nombreEquipo} gano los dos partidos`);
    puntaje1 <= 2  && console.log(`El club ${equipoprimero.nombreEquipo} no gano un partido`);


    // DESESTRUCTURACION OBETO EQUIPOPRIMERO

    let { nombreEquipo, estadistica: [puntaje] } = firstequipo

    console.log(nombreEquipo)
    console.log(puntaje)

    // SPREAD agregando propiedades

    let newTeam =   {
        ...firstequipo, 
        nombreEquipo: 'Platense',
        nacionalidad: 'Argentina',
        titulos: 19
    }

    console.log(newTeam)


    })
})