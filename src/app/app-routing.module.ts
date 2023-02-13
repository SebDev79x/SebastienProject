import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './_utils/components/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    /* path: 'homepage', component:HomeComponent */
    path: '', loadChildren: () => import('../app/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    /* path: 'homepage', component:HomeComponent */
    path: '**', component:PageNotFoundComponent
  },
   /* {
    path: 'homepage', loadChildren: () => import('../app/homepage/homepage.module').then(m => m.HomepageModule)
  }, *//*
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'personal', loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule)
  },
 */


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
