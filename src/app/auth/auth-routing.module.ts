import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthScreenComponent } from './auth-screen/auth-screen.component';

const routes: Routes = [
  {
    path: '', component: AuthScreenComponent, children: [
      {
        path: '', redirectTo:'auth',pathMatch:'full'
      },
      {
        path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
