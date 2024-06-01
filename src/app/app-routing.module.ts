import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmuebleComponent} from '../app/Inmueble/inmueble.component';
import { FormComponent } from './Inmueble/form.component';
import { DetalleInmuebleComponent } from './Inmueble/detalle-inmueble.component';

const routes: Routes = [
  { path: 'inmuebles', component: InmuebleComponent },
  { path: 'inmuebles/form', component: FormComponent },
  { path: 'inmuebles/:id', component: DetalleInmuebleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
