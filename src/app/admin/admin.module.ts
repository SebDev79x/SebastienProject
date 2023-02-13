import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersListComponent } from './user/users-list/users-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UserAddComponent,
    UserDeleteComponent,
    UserEditComponent,
    UserProfileComponent,
    DashboardComponent,
    AdminLayoutComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatButtonModule,
    SharedModule
  ],


})
export class AdminModule { }
