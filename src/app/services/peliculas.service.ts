import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,delay } from 'rxjs/Operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private API_KEY = 'b9ce5164f948062a1fc5362ee2dc9ca5';
  private URL = 'https://api.themoviedb.org/3';
  private URL_IMAGE = 'https://image.tmdb.org/t/p/w500';


  constructor(private httpClient: HttpClient) { }

  public getPopulares() {
    const url = `${ this.URL }/discover/movie?sort_by=popularity.desc&api_key=${ this.API_KEY }&language=es`;
    return this.httpClient.get(url).pipe(map((data: any) => {

      const resultadoPopulares = [];

      for (const pelicula of data.results) {
        pelicula.backdrop_path = `${this.URL_IMAGE}${pelicula.backdrop_path}`;
        pelicula.poster_path = `${this.URL_IMAGE}${pelicula.poster_path}`;
        resultadoPopulares.unshift(pelicula);

        if (resultadoPopulares.length > 5 ) { break; }
      }

      return resultadoPopulares;
    }));
  }

  private getFechaString(dia: Date) {
    const day = dia.getDate();
    const month = dia.getMonth() + 1;
    const year = dia.getFullYear();
    if (month < 10) { return `${year}-0${month}-${day}`; }
    return `${year}-${month}-${day}`;
  }

  public getCartelera() {

    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7 );

    const desdeStr = this.getFechaString(desde);
    const hastaStr = this.getFechaString(hasta);


    const url = `${ this.URL }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&sort_by=popularity.desc&api_key=${ this.API_KEY }&language=es`;
    return this.httpClient.get(url).pipe(map((data: any) => {

      const resultadoPopulares = [];

      for (const pelicula of data.results) {
        pelicula.backdrop_path = `${this.URL_IMAGE}${pelicula.backdrop_path}`;
        pelicula.poster_path = `${this.URL_IMAGE}${pelicula.poster_path}`;
        resultadoPopulares.unshift(pelicula);
        if (resultadoPopulares.length > 5 ) { break; }
      }
      return resultadoPopulares;
    }));
  }
}
