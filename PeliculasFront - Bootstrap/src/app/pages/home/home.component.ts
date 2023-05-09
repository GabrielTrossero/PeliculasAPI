import { Component, HostListener } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public arrayMovies: Movie[];
  public arrayTrending: Movie[];

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
      this.peliculasService.getMovies().subscribe({
        next: (movies) => {
          this.arrayMovies.push(...movies);
        },
        error: (error) => console.log(error),
      });
    }
  }

  constructor(
    private peliculasService: PeliculasService,
    private searchService: SearchService
  ) {
    this.arrayMovies = [];
    this.arrayTrending = [];
    this.searchService.setTextSearch(''); //seteo a vacío el buscador
  }

  ngOnInit() {
    this.peliculasService.getMovies().subscribe({
      next: (data) => {
        this.arrayMovies = data;
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.peliculasService.getTrending().subscribe({
      next: (data) => {
        this.arrayTrending = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnDestroy() {
    this.peliculasService.resetCarteleraPage();
  }
}
