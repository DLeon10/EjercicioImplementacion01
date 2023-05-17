"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actores_1 = require("./class/actores");
const directores_1 = require("./class/directores");
let director1 = new directores_1.Directores('director1', 'asdfasdf', 'asdfasdfasdf');
let director2 = new directores_1.Directores('director2', 'asdfasdf', 'asdfasdfasdf');
let director3 = new directores_1.Directores('director3', 'asdfasdf', 'asdfasdfasdf');
const directores = [director1, director2, director3];
let actor1 = new actores_1.Actor('director1', 'asdfasdf', 'asdfasdfasdf');
let actor2 = new actores_1.Actor('director2', 'asdfasdf', 'asdfasdfasdf');
let actor3 = new actores_1.Actor('director3', 'asdfasdf', 'asdfasdfasdf');
const actores = [actor1, actor2, actor3];
console.log(actores);
// let serie = new Serie('falsh', 'asdfasdf', directores, actores, episodio: Espisodio[], categoria: Categoria)
//# sourceMappingURL=main.js.map