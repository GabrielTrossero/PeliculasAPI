import { Component } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchElement: boolean;
  searchText: string;
  searchTextSubject: Observable<string>;
  faMagnifyingGlass = faMagnifyingGlass;
  faXmark = faXmark;

  constructor(private router: Router, private searchService: SearchService) {
    this.searchElement = false;
    this.searchText = '';
    this.searchTextSubject = this.searchService.getTextSearch();
  }

  ngOnInit() {
    //asigno la subscripción a la variable que utilizo en este componente
    this.searchTextSubject.subscribe((value) => {
      this.searchText = value;
    });
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

      //en caso de que cierren desde la ruta buscar, vuelvo hacia el home
      const url: UrlSegment[] = this.router.parseUrl(this.router.url).root
        .children['primary'].segments;
      if (url[0].path === 'buscar') {
        this.router.navigate(['/home']);
      }

      return (this.searchElement = false);
    } else return;
  }
}
