export class Plataforma {
    constructor(nombrePlataforma, sitioweb, planesPrecios, series) {
        this.nombrePlataforma = nombrePlataforma;
        this.sitioweb = sitioweb;
        this.planesPrecios = planesPrecios;
        this.series = series;
    }
    GuardarListadosSeries() {
        return this.series;
    }
    MostrarListadosSeries() {
        console.log(this.series);
    }
    Agregarseries(serie) {
        this.series.push(serie);
    }
}
