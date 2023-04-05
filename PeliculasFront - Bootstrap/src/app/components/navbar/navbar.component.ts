import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchElement: boolean;
  searchText: string;
  faMagnifyingGlass = faMagnifyingGlass;
  faXmark = faXmark;

  //Función que captura el scrolling
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    //capturo el navbar
    let element = document.querySelector('.navbar') as HTMLElement;

    //si scrolleo para abajo, le cambio el color
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-scrolled');
    } else {
      element.classList.remove('navbar-scrolled');
    }
  }

  constructor(private router: Router) {
    this.searchElement = false;
    this.searchText = '';
  }

  buscarPelicula() {
    if (this.searchText.length === 0) {
      this.router.navigate(['/home']);
    } else {
      this.searchText = this.searchText.trim(); //elimina los espacios en blanco de ambos lados de un string
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
