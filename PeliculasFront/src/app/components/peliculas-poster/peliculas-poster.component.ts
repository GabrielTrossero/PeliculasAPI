import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster',
  templateUrl: './peliculas-poster.component.html',
  styleUrls: ['./peliculas-poster.component.scss'],
})
export class PeliculasPosterComponent {
  @Input() movies: Movie[];

  constructor() {
    this.movies = [];
  }
}
