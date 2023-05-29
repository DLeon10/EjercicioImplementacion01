export class Serie {
    constructor(nombre, imagen, directoresList, actorList, episodio, categoria) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.directoresList = directoresList;
        this.actorList = actorList;
        this.episodio = episodio;
        this.categoria = categoria;
    }
    MostrarDetalleSerie() {
        return {
            Serie
        };
    }
    MostrarDetalleDirectorActor() {
        return {
            directoresList: this.directoresList,
            actorList: this.actorList
        };
    }
    agregarEpisodios(episodio) {
        this.episodio.push(episodio);
    }
    agregarActor(actor) {
        this.actorList.push(actor);
    }
    agregarDirector(director) {
        this.directoresList.push(director);
    }
    agregarCategoria(categoria) {
        this.categoria = categoria;
    }
    getDetalleSerie(list, buscar) {
        return list.filter(x => x.nombre == buscar)[0];
    }
}
