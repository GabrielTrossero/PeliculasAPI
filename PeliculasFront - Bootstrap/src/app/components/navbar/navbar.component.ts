import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchElement: boolean;
  faMagnifyingGlass = faMagnifyingGlass;
  searchText: string;

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
    //console.log(texto);
    console.log(this.searchText);
    this.searchText = this.searchText.trim(); //elimina los espacios en blanco de ambos lados de un string
    this.router.navigate(['/buscar', this.searchText]);
  }

  //función para desplegar/ocultar el buscador
  activarSearch() {
    //si está activo, lo desactivo
    if (this.searchElement) {
      return (this.searchElement = false);
    } else return (this.searchElement = true);
  }
}
