import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 /*  {
    path: '', component:HomeComponent
  }, */
  {
    path: 'public', loadChildren: () => import('../public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),canActivate:[AuthGuard]
  },
  {
    path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'personal', loadChildren: () => import('../personal/personal.module').then(m => m.PersonalModule)
  },

 /*  {
    path: '',
    component:HomeComponent,//ROUTE PAR DEFAUT SI RIEN TROUVE
    pathMatch: 'full'
  } */
 /*  {
  path: '', component: HomeComponent, children: [
    {
   path: '', redirectTo: 'home', pathMatch: 'full'
 },
 {
  path: 'public', loadChildren: () => import('../public/public.module').then(m => m.PublicModule)
},
{
  path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
},
{
  path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
},
{
  path: 'personal', loadChildren: () => import('../personal/personal.module').then(m => m.PersonalModule)
},

],
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
