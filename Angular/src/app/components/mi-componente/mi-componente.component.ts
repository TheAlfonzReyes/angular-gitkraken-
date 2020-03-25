import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'       
})
export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;
    
        constructor(){
            this.titulo = "Hola mundo, soy el componente";
            this.comentario = 'El comentario del componente';
            this.year = 2020;
            this.mostrarPeliculas = true;
            
            console.log("Componente mi-componente cargado en consola!!!");
            console.log(this.titulo, this.comentario, this.year);
        }

        ocultarPeliculas(){
            this.mostrarPeliculas = false;
        }
}