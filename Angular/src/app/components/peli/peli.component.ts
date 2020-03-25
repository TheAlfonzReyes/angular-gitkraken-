import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';


@Component({
  selector: 'app-peli',
  templateUrl: './peli.component.html',
  styleUrls: ['./peli.component.css']
})
export class PeliComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Output() MarcarFavorita = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  seleccionar(event, pelicula) {
    this.MarcarFavorita.emit({
      pelicula: pelicula
    });
  }

}
