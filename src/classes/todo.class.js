

export class Todo{

    static fromJson({id, tarea, completado, creado}){

        const tempTodo      = new Todo(tarea);
        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor( tarea ){

        this.tarea = tarea;
        //creamos de forma auto lo sig
        this.id         = new Date().getTime();//565421397
        this.completado =false;
        this.creado     =new Date();
    }

    
    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }
}