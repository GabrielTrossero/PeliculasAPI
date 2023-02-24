import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { PeliculasPosterComponent } from './peliculas-poster/peliculas-poster.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [PeliculasPosterComponent],
  imports: [CommonModule, ComponentsRoutingModule, PipesModule],
  exports: [PeliculasPosterComponent],
})
export class ComponentsModule {}
