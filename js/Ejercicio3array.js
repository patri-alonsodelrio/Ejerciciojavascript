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
        return this.equipos.find((equipos) => (equipos.nombreEquipo == nombreEquipo));
    }
}

let campeonato1 = new Campeonatos('CampeonatoArg', 'Nacional');
let campeonato2 = new Campeonatos('CopaArgentina', 'Nacional');
let campeonato3 = new Campeonatos('CopaLibertadores', 'Internacional');

class Equipos {
    constructor(nombreEquipo, nacionalidad) {
        this.nombreEquipo = nombreEquipo;
        this.nacionalidad = nacionalidad;
    }

}

let firstequipo = new Equipos('River Plate', 'Argentina')

campeonato1.agregarEquipo(firstequipo);
campeonato2.agregarEquipo(firstequipo);
campeonato3.agregarEquipo(firstequipo);

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


//Logue del array dentro de el objeto Campeonatos

console.log(campeonato1)
console.log(campeonato2)
console.log(campeonato3)


// Logueo en Consola de los equipos

console.log(firstequipo)
console.log(equiposegundo)
console.log(equipoprimero)
console.log(equipotercero)

