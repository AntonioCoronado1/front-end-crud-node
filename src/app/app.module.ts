import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InmuebleComponent } from './Inmueble/inmueble.component';
import { FormComponent } from './Inmueble/form.component';
import { DetalleInmuebleComponent } from './Inmueble/detalle-inmueble.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InmuebleComponent,
    FormComponent,
    DetalleInmuebleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
