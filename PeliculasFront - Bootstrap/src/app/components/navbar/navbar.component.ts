import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
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

  constructor(private router: Router) {}

  buscarPelicula(texto: string) {
    var texto = texto.trim(); //elimina los espacios en blanco de ambos lados de un string
    this.router.navigate(['/buscar', texto]);
  }
}
