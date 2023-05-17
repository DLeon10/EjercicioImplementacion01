import { Actor } from "./class/actores";
import { Directores } from "./class/directores";
import { Serie } from "./class/serie";


let director1 = new Directores('director1', 'asdfasdf', 'asdfasdfasdf');
let director2 = new Directores('director2', 'asdfasdf', 'asdfasdfasdf');
let director3 = new Directores('director3', 'asdfasdf', 'asdfasdfasdf');


const directores = [director1, director2, director3];


let actor1 = new Actor('director1', 'asdfasdf', 'asdfasdfasdf');
let actor2 = new Actor('director2', 'asdfasdf', 'asdfasdfasdf');
let actor3 = new Actor('director3', 'asdfasdf', 'asdfasdfasdf');

const actores = [actor1, actor2, actor3];

console.log(actores);

// let serie = new Serie('falsh', 'asdfasdf', directores, actores, episodio: Espisodio[], categoria: Categoria)