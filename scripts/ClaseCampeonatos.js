export class Campeonatos {
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