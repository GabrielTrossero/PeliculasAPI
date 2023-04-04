import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { PeliculasPosterComponent } from './peliculas-poster/peliculas-poster.component';
import { PipesModule } from '../pipes/pipes.module';
import { CastComponent } from './cast/cast.component';
import { TrendingComponent } from './trending/trending.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RatingModule } from 'ng-starrating';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms'; //libería para ngModel

@NgModule({
  declarations: [
    PeliculasPosterComponent,
    CastComponent,
    TrendingComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    PipesModule,
    RatingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [
    PeliculasPosterComponent,
    CastComponent,
    TrendingComponent,
    NavbarComponent,
  ],
})
export class ComponentsModule {}
