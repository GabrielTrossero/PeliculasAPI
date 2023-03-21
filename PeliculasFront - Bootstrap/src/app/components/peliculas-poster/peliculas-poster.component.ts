import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-peliculas-poster',
  templateUrl: './peliculas-poster.component.html',
  styleUrls: ['./peliculas-poster.component.scss'],
})
export class PeliculasPosterComponent {
  @Input() movies: Movie[];

  constructor(private router: Router) {
    this.movies = [];
  }

  onMovieClick(movie: Movie) {
    this.router.navigate(['/pelicula', movie.id]);
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
