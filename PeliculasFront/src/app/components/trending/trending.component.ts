import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent {
  @Input() trending: Movie[];

  constructor() {
    this.trending = [];
  }
}
