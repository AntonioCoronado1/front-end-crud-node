import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmuebleComponent} from '../app/Inmueble/inmueble.component';
import { FormComponent } from './Inmueble/form.component';
import { DetalleInmuebleComponent } from './Inmueble/detalle-inmueble.component';
import { FormComponents } from './Visita/form.component';
import { LoginComponent } from './Usuario/login.component';
import { authGuard } from './Usuario/auth.guard';


const routes: Routes = [
  { path: 'inmuebles', component: InmuebleComponent, canActivate:[authGuard] },
  { path: 'inmuebles/:id', component: InmuebleComponent, canActivate:[authGuard]},
  { path: 'inmuebles/new/form', component: FormComponent ,canActivate:[authGuard]},
  { path: 'inmuebles/view/:id', component: DetalleInmuebleComponent ,canActivate:[authGuard]},
  { path: 'visita/form/:id', component: FormComponents,canActivate:[authGuard]},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
