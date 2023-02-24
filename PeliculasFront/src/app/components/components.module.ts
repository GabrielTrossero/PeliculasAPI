import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { PeliculasPosterComponent } from './peliculas-poster/peliculas-poster.component';
import { PipesModule } from '../pipes/pipes.module';
import { CastComponent } from './cast/cast.component';

@NgModule({
  declarations: [PeliculasPosterComponent, CastComponent],
  imports: [CommonModule, ComponentsRoutingModule, PipesModule],
  exports: [PeliculasPosterComponent, CastComponent],
})
export class ComponentsModule {}
