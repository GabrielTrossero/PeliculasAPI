import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchElement: boolean;
  searchText: string;
  faMagnifyingGlass = faMagnifyingGlass;
  faXmark = faXmark;

  constructor(private router: Router) {
    this.searchElement = false;
    this.searchText = '';
  }

  buscarPelicula() {
    if (this.searchText.length === 0) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/buscar', this.searchText]);
    }
  }

  //función para desplegar el buscador
  activarSearch() {
    //si está activo, lo desactivo
    if (!this.searchElement) {
      return (this.searchElement = true);
    } else return;
  }

  //función para ocultar el buscador
  desactivarSearch() {
    //si está inactivo, lo activo
    if (this.searchElement) {
      this.searchText = '';
      this.router.navigate(['/home']);
      return (this.searchElement = false);
    } else return;
  }
}
