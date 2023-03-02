import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  buscarPelicula(texto: string) {
    var texto = texto.trim(); //elimina los espacios en blanco de ambos lados de un string
    this.router.navigate(['/buscar', texto]);
  }
}
