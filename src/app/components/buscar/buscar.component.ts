import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  public buscar: string;

  constructor(public peliculasService: PeliculasService) { }

  ngOnInit() {
  }

  public buscarPelicula() {
      if ( this.buscar.length === 0 ) {
        return;
      }
      this.peliculasService.buscarPelicula( this.buscar ).subscribe(data => console.log(data));
  }

}
