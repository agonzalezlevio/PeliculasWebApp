import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  public pelicula: any;
  public regresarA: string;
  public busqueda: string;

  constructor(public peliculasService: PeliculasService, public router: ActivatedRoute) {
    this.router.params.subscribe(parametros => {
      this.regresarA = parametros.pagina;

      if (parametros.busqueda ) {
        this.busqueda = parametros.busqueda;
      }


      if (parametros) {
        this.peliculasService.getPelicula(parametros.id).subscribe(data => { this.pelicula = data;
        });
      }
    });
  }


  ngOnInit() {
  }

}
