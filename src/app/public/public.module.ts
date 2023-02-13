import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { TechnosComponent } from './technos/technos.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PublicLayoutComponent,
    ContactComponent,
    PrivacyComponent,
    ProjectsComponent,
    ExperienceComponent,
    TechnosComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
