export class Espisodio {
    nombreEpisodio: string;
    resumenEpisodio: string;
    duracion: TimeRanges;

    constructor(nombreEpisodio:string, resumenEpisodio:string, duracion:TimeRanges) {
        this.nombreEpisodio=nombreEpisodio;
        this.resumenEpisodio=resumenEpisodio;
        this.duracion=duracion;
    }
}