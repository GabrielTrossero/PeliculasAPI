import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss'],
})
export class PeliculaComponent {
  public movie: MovieResponse;
  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService
  ) {
    this.movie = {} as MovieResponse; //forma de inicializar interfaz
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params;
    //se podría obtener con id.id, pero hay que desactivar una opcion en tsconfig.json para que no de error
    this.peliculasService.getDetallePelicula(id['id']).subscribe(
      (data) => {
        console.log(data);
        this.movie = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
