import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InmuebleComponent } from './Inmueble/inmueble.component';
import { FormComponent } from './Inmueble/form.component';
import { FormComponents } from './Visita/form.component';
import { DetalleInmuebleComponent } from './Inmueble/detalle-inmueble.component';
import { VisitaComponent } from './Visita/visita.component';
import { LoginComponent } from './Usuario/login.component';
import { AuthInterceptor } from './Usuario/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InmuebleComponent,
    FormComponent,
    DetalleInmuebleComponent,
    VisitaComponent,
    FormComponents,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
