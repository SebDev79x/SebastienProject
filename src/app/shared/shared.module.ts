import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    CardComponent,
    BodyComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    CardComponent,
    BodyComponent,

  ]
})
export class SharedModule { }
