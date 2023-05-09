import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/interfaces/credits-response';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { combineLatest } from 'rxjs';
import { StarRatingComponent } from 'ng-starrating';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss'],
})
export class PeliculaComponent {
  public movie: MovieResponse;
  public arrayCast: Cast[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private router: Router,
    private searchService: SearchService
  ) {
    this.movie = {} as MovieResponse; //forma de inicializar interfaz
    this.arrayCast = [];
    this.searchService.setTextSearch(''); //seteo a vacío el buscador
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params;
    //se podría obtener con id.id, pero hay que desactivar una opcion en tsconfig.json para que no de error

    //forma de usar múltiples observables
    combineLatest([
      this.peliculasService.getDetallePelicula(id['id']),
      this.peliculasService.getCast(id['id']),
    ]).subscribe(([movie, cast]) => {
      if (!movie) {
        this.router.navigateByUrl('/home');
        return;
      } else {
        this.movie = movie;
      }
      this.arrayCast = cast.filter((actor) => actor.profile_path !== null); //saco los actores que no tengan imagen
    });

    /*this.peliculasService.getDetallePelicula(id['id']).subscribe(
      (data) => {
        if (!data) {
          this.router.navigateByUrl('/home');
          return;
        } else {
          this.movie = data;
        }
      },
      (error) => {
        console.log(error);
      }
    );

    this.peliculasService.getCast(id['id']).subscribe(
      (cast) => {
        this.arrayCast = cast.filter((actor) => actor.profile_path !== null); //saco los actores que no tengan imagen
      },
      (error) => {
        console.log(error);
      }
    );*/
  }

  onRate($event: {
    oldValue: number;
    newValue: number;
    starRating: StarRatingComponent;
  }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
