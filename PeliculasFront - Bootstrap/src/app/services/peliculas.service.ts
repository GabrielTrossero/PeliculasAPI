import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, take } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { MovieResponse } from '../interfaces/movie-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private baseURL: string;
  private carteleraPage = 1;
  public cargando = false;

  constructor(private httpClient: HttpClient) {
    this.baseURL = 'https://api.themoviedb.org/3';
    //Cartelera: https://api.themoviedb.org/3/movie/now_playing?api_key=73f307b3caf328a366dfabbcf55bf2b9
    //Tendencias: https://api.themoviedb.org/3/trending/movie/week?api_key=73f307b3caf328a366dfabbcf55bf2b9
    //Detalle pelicula: https://api.themoviedb.org/3/movie/505642?api_key=73f307b3caf328a366dfabbcf55bf2b9
    //Imagen de la pelicula: https://image.tmdb.org/t/p/original/sv1xJUazXeYqALzczSZ3O6nkH75.jpg
    //Elenco: https://api.themoviedb.org/3/movie/505642/credits?api_key=73f307b3caf328a366dfabbcf55bf2b9
    //Buscar pelicula: https://api.themoviedb.org/3/search/movie?api_key=73f307b3caf328a366dfabbcf55bf2b9
  }

  get params() {
    return {
      api_key: '73f307b3caf328a366dfabbcf55bf2b9',
      language: 'es-AR',
      page: this.carteleraPage.toString(),
    };
  }

  getTrending(): Observable<Movie[]> {
    const urlSecon = '/trending/movie/week';

    return this.httpClient
      .get<CarteleraResponse>(this.baseURL + urlSecon, {
        params: this.params,
      })
      .pipe(map((data) => data.results)); //map filtra para usar una parte de la informacion (results contiene la info de las peliculas)
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

  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

  getDetallePelicula($id: string): Observable<MovieResponse> {
    const urlSecon = '/movie/';
    console.log(this.baseURL + urlSecon + $id);
    return this.httpClient.get<MovieResponse>(this.baseURL + urlSecon + $id, {
      params: this.params,
    });
  }

  getCast($id: string): Observable<Cast[]> {
    const urlSecon = '/movie/';
    const urlThird = '/credits';
    return this.httpClient
      .get<CreditsResponse>(this.baseURL + urlSecon + $id + urlThird, {
        params: this.params,
      })
      .pipe(map((data) => data.cast)); //filtro el resultado para devolver solo el elenco
  }

  searchMovie(texto: string): Observable<Movie[]> {
    const urlSecon = '/search/movie';
    const params = {
      ...this.params,
      query: texto,
    };

    return this.httpClient
      .get<CarteleraResponse>(this.baseURL + urlSecon, {
        params: params,
      })
      .pipe(map((data) => data.results));
  }
}
