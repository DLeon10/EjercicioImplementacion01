export class Categoria{
    constructor(private tipo:string, private lista?:string[]){

    }
    agregarLista(tipo:string){
        this.lista?.push(tipo);
    }
    getlist(){
        console.log(this.lista)
    }
    ListadoCategorias() {
        return this.tipo;
    }

}