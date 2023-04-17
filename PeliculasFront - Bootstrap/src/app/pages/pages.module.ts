import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { BuscarComponent } from './buscar/buscar.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [HomeComponent, PeliculaComponent, BuscarComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    PipesModule,
    RatingModule,
  ],
})
export class PagesModule {}
