import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public user: any;
  public campo: string;

  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: '',

    }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Formulario enviado crack");
  }

  hasDadoClick(){
    alert("has dado click");
  }

  hasSalido(){
    alert("Has Dado enter en vez de click");
  }

} // Final de export
