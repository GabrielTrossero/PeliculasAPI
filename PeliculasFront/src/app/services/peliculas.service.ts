import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private baseURL: string;
  private carteleraPage = 1;
  public cargando = false;

  constructor(private httpClient: HttpClient) {
    this.baseURL = 'https://api.themoviedb.org/3';
    //https://api.themoviedb.org/3/trending/all/week?api_key=73f307b3caf328a366dfabbcf55bf2b9
    //Cartelera: https://api.themoviedb.org/3/movie/now_playing?api_key=73f307b3caf328a366dfabbcf55bf2b9
    //Idea para header: https://api.themoviedb.org/3/trending/all/week?api_key=73f307b3caf328a366dfabbcf55bf2b9
  }

  get params() {
    return {
      api_key: '73f307b3caf328a366dfabbcf55bf2b9',
      languaje: 'es-ES',
      page: this.carteleraPage.toString(),
    };
  }

  getMovies(): Observable<Movie[]> {
    const urlSecon = '/movie/now_playing';

    //si el servicio está cargando aún, entonces no se llama
    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;

    return this.httpClient
      .get<CarteleraResponse>(this.baseURL + urlSecon, {
        params: this.params,
      })
      .pipe(
        map((data) => data.results), //map filtra para usar una parte de la informacion (results contiene la info de las peliculas)
        tap(() => {
          this.carteleraPage += 1;
          this.cargando = false;
        }) //con tap edito el resultado obtenido de map (cambiar de pagina)
      );
  }
}
