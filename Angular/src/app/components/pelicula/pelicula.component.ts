import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
  providers: [PeliculaService],
})

export class PeliculaComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public pelicula: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculaService

  ) {
    this.titulo = "Componente peliculas";
    this.pelicula = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020, 8, 12);
  }
  //El constructor precarga, no llega logica, para eso se usa el ngOnInit
  ngOnInit() {
    console.log("Componente ngOnInit Iniciado")
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck() {
    console.log("DoCheck Lanzado");
  }

  cambiarTitulo() {
    this.titulo = "El titulo ha sido cambiado !!!";
  }

  ngOnDestroy() {
    console.log("EL COMPONENTE SE VA A ELIMINAR DE LA EJECUCION");
  }

  mostrarFavorita(event) {
    console.log(event);
    this.favorita = event.pelicula;
  }



}
