import { Component, HostListener } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public arrayMovies: Movie[];

  //Función que captura el scrolling
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Posición actual del Scroll + 1300
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    // Posición maxima del Scroll
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max) {
      //si el servicio está cargando aún, entonces no se llama
      if (this.peliculasService.cargando) {
        return;
      }
      this.peliculasService.getMovies().subscribe(
        (movies) => {
          this.arrayMovies.push(...movies);
        },
        (error) => console.log(error)
      );
    }
  }

  constructor(private peliculasService: PeliculasService) {
    this.arrayMovies = [];
  }

  ngOnInit() {
    this.peliculasService.getMovies().subscribe(
      (data) => {
        console.log(data);
        this.arrayMovies = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.peliculasService.resetCarteleraPage();
  }
}
