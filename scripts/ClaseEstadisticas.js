export class Estadisticas {
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
