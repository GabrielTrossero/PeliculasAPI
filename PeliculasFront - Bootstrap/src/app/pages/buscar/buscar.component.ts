import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss'],
})
export class BuscarComponent {
  public moviesSearch: Movie[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private router: Router
  ) {
    this.moviesSearch = [];
  }

  ngOnInit() {
    /* //DE ESTA FORMA HACE UNA SOLA SOLICITUD, Y SI LA URL CAMBIA, NO SE ACTUALIZA
    const consultaSearch = this.activatedRoute.snapshot.params;
    this.peliculasService.searchMovie(consultaSearch['texto']).subscribe({
      next: (data) => {
        this.moviesSearch = data;
      },
      error: (error) => console.log(error),
    });*/

    this.activatedRoute.params.subscribe((routeParams) => {
      this.peliculasService.searchMovie(routeParams['texto']).subscribe({
        next: (data) => {
          this.moviesSearch = data;
        },
        error: (error) => console.log(error),
      });
    });
  }

  onMovieClick(movie: Movie) {
    this.router.navigate(['/pelicula', movie.id]);
  }
}
