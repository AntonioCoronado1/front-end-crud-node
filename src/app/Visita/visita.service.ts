import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Inmueble } from '../Inmueble/inmueble';
import { Visita } from './visita';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  private urlApi: string ="";

  constructor(private http: HttpClient,
    private router: Router){
     this.urlApi = environment.apiUrl+'/api';
   }
   getVisitas(id: Number): Observable<Visita[]> {
    return this.http.get<Visita[]>(`${this.urlApi}/visitas/${id}`);
  }
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlApi + '/clientes');
  }
  create(visita: Visita): Observable<Visita>{
    return this.http.post<Visita>(`${this.urlApi}/visitas`, visita).pipe(
       map((response: any)=> response.visita as Visita),
       catchError(e=>{
         if(e.status==400){
           return throwError(()=>e);
         }
         if(e.errors.mensaje){
           console.log(e.errors.mensaje);
         } 
         return throwError(()=>e);
       })
    );
  }

}
