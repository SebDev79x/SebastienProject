import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [

  {
    path: '', component: AdminLayoutComponent, children: [
      { path: '', redirectTo:'dashboard',pathMatch:'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: 'movies', loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule) }
    ],

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AdminRoutingModule { }
