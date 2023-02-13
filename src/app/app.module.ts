import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { PersonalModule } from './personal/personal.module';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomepageModule } from './homepage/homepage.module';
import { PageNotFoundComponent } from './_utils/components/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptorProvider } from './_helpers/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    AdminModule,
    PersonalModule,
    AuthModule,
    BrowserAnimationsModule,
    HomepageModule,
    SharedModule,
    HttpClientModule

    //https://indepth.dev/posts/1191/stop-using-shared-material-module
  ],
  // TokenInterceptorProvider tout le temps actif
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
