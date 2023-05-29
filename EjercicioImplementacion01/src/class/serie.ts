import { Actor } from "./actores.js";
import { Categoria } from "./categoria.js";
import { Directores } from "./directores.js";
import { Espisodio } from "./episodio.js";


export class Serie {

    constructor(private nombre: string,
        private imagen: string,
        private directoresList: Directores[],
        private actorList: Actor[],
        private episodio: Espisodio[],
        private categoria: Categoria) { }




    MostrarDetalleSerie() {

        return {
            Serie
        };
    }
    MostrarDetalleDirectorActor() {
        return {
            directoresList: this.directoresList,
            actorList: this.actorList
        }
    }
    agregarEpisodios(episodio: Espisodio) {
        this.episodio.push(episodio);
    }
    agregarActor(actor: Actor) {
        this.actorList.push(actor);
    }
    agregarDirector(director: Directores) {
        this.directoresList.push(director);
    }
    agregarCategoria(categoria: Categoria) {
        this.categoria = categoria
    }

 getDetalleSerie(list: Serie[], buscar: string): Serie {
        return list.filter(x => x.nombre == buscar)[0];
    }





}

