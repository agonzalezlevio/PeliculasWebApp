import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public cartelera: any;
  public populares: any;
  public popularesNinos: any;


  constructor(public peliculasService: PeliculasService) {
    // Cartelera
    this.peliculasService.getCartelera().subscribe(data => {
      this.cartelera = data;
    });
    // Populares
    this.peliculasService.getPopulares().subscribe(data => {
      this.populares = data;
    });
    // Populares Niños
    this.peliculasService.getPopularesNinos().subscribe(data => {
      this.popularesNinos = data;
    });


   }

  ngOnInit() {
  }

}
