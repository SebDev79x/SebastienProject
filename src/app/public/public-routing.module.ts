import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../_utils/components/page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProjectsComponent } from './projects/projects.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { TechnosComponent } from './technos/technos.component';

const routes: Routes = [
  {
    path: '', component: PublicLayoutComponent, children: [

      {
        path: 'projects', component: ProjectsComponent,
      },
      {
        path: 'experience', component: ExperienceComponent,
      },
      {
        path: 'technos', component: TechnosComponent,
      },
      {
        path: 'contact', component: ContactComponent,
      },
      {
        path: 'privacy', component: PrivacyComponent,
      },
    ],
  },
  {
    path: '**', component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
