import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { NonfoundComponent } from './views/nonfound/nonfound.component';
import { HomeComponent } from './views/home';
import { AlertComponent } from './components/alert';
import { ApiInterceptor, ErrorInterceptor } from './helpers';
import { RegisterComponent } from './views/register';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NonfoundComponent,
    HomeComponent,
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
