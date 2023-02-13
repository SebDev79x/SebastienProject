import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { AuthScreenComponent } from './auth-screen/auth-screen.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AuthScreenComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LoginModule,
    RegisterModule,
    MatButtonModule,

  ],

})
export class AuthModule { }
