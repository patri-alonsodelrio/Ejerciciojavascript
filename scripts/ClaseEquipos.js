export class Equipos {
    constructor(nombreEquipo, nacionalidad) {
        this.nombreEquipo = nombreEquipo;
        this.estadistica = [];
    }

    agregarPartido(partido) {
        this.estadistica.push(partido)
    }

}
