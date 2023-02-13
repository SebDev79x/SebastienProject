import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalLayoutComponent } from './personal-layout/personal-layout.component';

const routes: Routes = [
  {path:'', component:PersonalLayoutComponent,children:[
    {
      path: '', redirectTo:'personal',pathMatch:'full'
    },
  ]}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
