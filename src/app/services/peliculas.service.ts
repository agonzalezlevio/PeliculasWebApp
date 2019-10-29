import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
    return this.httpClient.get(url);
  }
}
