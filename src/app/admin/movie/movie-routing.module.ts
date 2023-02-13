import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDeleteComponent } from './movie-delete/movie-delete.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent},
  { path:':id',component:MovieCardComponent},
  { path:'delete/:id',component:MovieDeleteComponent},
  { path:'edit/:id',component:MovieEditComponent},
  { path:'add',component:MovieAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
