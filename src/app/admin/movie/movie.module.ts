import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieDeleteComponent } from './movie-delete/movie-delete.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesListComponent } from './movies-list/movies-list.component';


@NgModule({
  declarations: [
    MovieAddComponent,
    MovieDeleteComponent,
    MovieEditComponent,
    MovieCardComponent,
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
