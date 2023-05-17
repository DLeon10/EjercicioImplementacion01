import { Actor } from "./actores";
import { Categoria } from "./categoria";
import { Directores } from "./directores";
import { Espisodio } from "./episodio";


export class Serie {

    constructor(private nombre: string,
        private imagen: string,
        private directoresList: Directores[],
        private actorList: Actor[],
        private episodio: Espisodio[],
        private categoria: Categoria) { }



    MostrarDetalleSerie() {

        return {
            nombre: this.nombre,
            imagen: this.imagen,
            directoresList: this.directoresList,
            actorList: this.actorList,
            episodio: this.episodio,
            categoria: this.categoria
        };
    }




}

