import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
})
export class CastComponent {
  @Input() cast: Cast[];

  constructor() {
    this.cast = [];
  }
}
