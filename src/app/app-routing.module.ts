import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmuebleComponent} from '../app/Inmueble/inmueble.component';
import { FormComponent } from './Inmueble/form.component';
import { DetalleInmuebleComponent } from './Inmueble/detalle-inmueble.component';
import { FormComponents } from './Visita/form.component';

const routes: Routes = [
  { path: 'inmuebles', component: InmuebleComponent },
  { path: 'inmuebles/:id', component: InmuebleComponent },
  { path: 'inmuebles/new/form', component: FormComponent },
  { path: 'inmuebles/view/:id', component: DetalleInmuebleComponent},
  { path: 'visita/form/:id', component: FormComponents},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
