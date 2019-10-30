import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  private URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

  transform(pelicula: any): any {

    console.log('pelicula', pelicula);

    if (pelicula.backdrop_path) {
      return this.URL_IMAGE + pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
        return this.URL_IMAGE + pelicula.poster_path;
      } else {
        return 'assets/img/no-image.jpg';
      }
    }
  }
}
