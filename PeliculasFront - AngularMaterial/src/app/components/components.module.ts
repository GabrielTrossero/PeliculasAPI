import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { PeliculasPosterComponent } from './peliculas-poster/peliculas-poster.component';
import { PipesModule } from '../pipes/pipes.module';
import { CastComponent } from './cast/cast.component';
import { TrendingComponent } from './trending/trending.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    PeliculasPosterComponent,
    CastComponent,
    TrendingComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, ComponentsRoutingModule, PipesModule],
  exports: [
    PeliculasPosterComponent,
    CastComponent,
    TrendingComponent,
    NavbarComponent,
  ],
})
export class ComponentsModule {}
