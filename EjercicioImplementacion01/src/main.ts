import { Actor } from "./class/actores.js";
import { Categoria } from "./class/categoria.js";
import { Directores } from "./class/directores.js";
import { Espisodio } from "./class/episodio.js";
import { PlanesPrecios } from "./class/planesPrecios.js";
import { Plataforma } from "./class/plataforma.js";
import { Serie } from "./class/serie.js";


let director1 = new Directores('Matt Duffer', 'fotografia1', 'descripción1');
let director2 = new Directores('Ross Duffer', 'fotografia2', 'descripción2');
let director3 = new Directores('Shawn Levy', 'fotografia3', 'descripción3');
let director4 = new Directores('Hwang Dong-hyuk', 'fotografía4','descripcion');


const directoresstanger = [director1, director2, director3];
const directorescalamar=[director4]

let actor1 = new Actor('Winona Ryder', 'fotografia1', 'Joyce Ryder');
let actor2 = new Actor('Natalia Dyer', 'fotografia2', 'Nancy Wheeler');
let actor3 = new Actor('Millie Bobby Brown', 'fotografia3', 'Once');
let actor4 = new Actor('David Harbour', 'fotografia4', 'Jim Hopper');
let actor5 = new Actor('Joe Keery', 'fotografia5', 'Steve Harrington');
let actor6 = new Actor('Charlie Heaton', 'fotografia3', 'Jhonathan');
let actor7 = new Actor('Noah Schnapp', 'fotografia7', 'Will Byers');

let actor8 = new Actor('Lee Jung-jae ', 'fotografia3', 'Seong Gi-hun');
let actor9 = new Actor('Park Hae-soo', 'fotografia3', ' Cho Sang-woo');
let actor10 = new Actor('Hoyeon-jung', 'fotografia3', 'Kang Sae-byeok');
let actor11 = new Actor('Heo Sung-tae ', 'fotografia3', 'Jang Deok-su');

const actoresstanger = [actor1, actor2, actor3, actor4, actor5,actor6];
const actoresclamar=[actor9,actor10,actor11,actor8];

let episodio1 = new Espisodio('Chapter One: The Vanishing of Will Byers', "Después de la desaparición de Will Byers, un niño de Hawkins, Indiana, sus amigos y su madre se embarcan en una búsqueda desesperada para encontrarlo. Mientras tanto, una misteriosa niña con habilidades sobrenaturales aparece en la ciudad.","45:30")
let episodio2= new Espisodio('Chapter Two: The Weirdo on Maple Street', "Los amigos de Will se unen a Eleven, la niña misteriosa, para descubrir más sobre su origen y sus poderes. La tensión aumenta en Hawkins cuando se produce un apagón generalizado.","45:30")
let episodio3 = new Espisodio('Chapter Three: Holly, Jolly', "Joyce, la madre de Will, se comunica con su hijo a través de luces parpadeantes en la casa. Mientras tanto, la pandilla de amigos descubre una extraña criatura en el bosque.","45:30")
let episodio4 = new Espisodio('Chapter Four: The Body', "Los amigos de Will intentan ocultar la criatura que encontraron, mientras la policía de Hawkins investiga su desaparición. Joyce se enfrenta a visiones aterradoras mientras busca a su hijo.","45:30")
let episodio5 = new Espisodio('Chapter Five: The Flea and the Acrobat', " La búsqueda de Will lleva a la pandilla a una escuela abandonada, donde enfrentan peligros y descubren pistas sobre un experimento secreto del gobierno.","45:30")
let episodio6 = new Espisodio('Chapter Six: The Flea and the Acrobat', "  La pandilla enfrenta una confrontación peligrosa en la escuela abandonada mientras intentan rescatar a Will. Joyce y Hopper hacen un descubrimiento sorprendente.","45:30")


let episodioc1 = new Espisodio('Luz roja, luz verde', "Un hombre llamado Seong Gi-hun tiene mala suerte, ya que acumuló enormes deudas con usureros mientras se distanciaba de su hija y exesposa. En una estación de tren, un hombre bien vestido le pide que juegue un juego de ddakji por dinero.","45:30")
let episodioc2= new Espisodio('Infierno', "Más de la mitad de los jugadores mueren en el primer juego, y algunos supervivientes horrorizados suplican que se vayan. De acuerdo con la tercera cláusula del acuerdo del juego, si la mayoría vota para finalizar los juegos, todos los jugadores serán enviados a casa, pero no se les dará dinero","45:30")
let episodioc3 = new Espisodio('El hombre del paraguas', "Jun-ho se infiltra con éxito en los juegos disfrazándose de trabajador enmascarado, y se revela que la ubicación es una isla remota. Los jugadores ahora están más preparados y comienzan a formar alianzas.","45:30")
let episodioc4 = new Espisodio('No abandones el equipo', "El jugador 111 (El doctor), un médico caído en desgracia, trabaja en secreto con un puñado de empleados para extraer órganos de jugadores muertos para venderlos en el mercado negro a cambio de información sobre los próximos juegos","45:30")
let episodioc5 = new Espisodio('Un mundo justo', " A pesar de tener jugadores más débiles, el equipo de Gi-hun logra ganar su partido de tira y afloja con la estrategia del Jugador 001 y el pensamiento rápido de Sang-woo.","45:30")


const espisodiosstranger = [episodio1,episodio2,episodio3,episodio4,episodio5]
const episodioscalamar =[episodioc1,episodioc2,episodioc3,episodioc4,episodioc5]


let categoria1 = new Categoria("Series de sci-fi")
let categoria2 = new Categoria("Seriedramáticas")

let serie1 = new Serie('Stranger Thinngs', 'imagenserie.png', directoresstanger, actoresstanger, espisodiosstranger, categoria1) 
serie1.agregarEpisodios(episodio6)
serie1.agregarActor(actor7)
serie1.agregarDirector(actor1)
let serie2 = new Serie('Juego del Calamar', 'imageserie.png', directorescalamar, actoresclamar, episodioscalamar, categoria2 )   

const seriesNetflix=[serie1,serie2]

let precios1 = new PlanesPrecios("Individual","20000")
let precios2 = new PlanesPrecios("Familiar", "40000")

const planes = [precios1,precios2]

console.log(serie1) 
console.log(serie2)   

let netflix = new Plataforma("Netflix", "www.Netflix.com",planes,seriesNetflix);

let data = serie1.getDetalleSerie(seriesNetflix, 'Stranger Thinngs');

console.log(netflix)
console.log(data);
netflix.MostrarListadosSeries();
