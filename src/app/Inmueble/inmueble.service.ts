import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Inmueble } from './inmueble';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  private urlApi: string ="";

  constructor(private http: HttpClient,
    private router: Router){
     this.urlApi = environment.apiUrl+'/api';
   }

   getInmuebles(): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(this.urlApi + '/inmuebles');
  }
  create(inmueble: Inmueble): Observable<Inmueble>{
    return this.http.post<Inmueble>(`${this.urlApi}/inmuebles`, inmueble).pipe(
       map((response: any)=> response.inmueble as Inmueble),
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
  getInmuebleById(id: Number): Observable<Inmueble[]>{    
    return this.http.get<Inmueble[]>(`${this.urlApi}/inmuebles/referencia/${id}`);
 }
 getInmuebleBy(estado: String): Observable<Inmueble[]>{    
  return this.http.get<Inmueble[]>(`${this.urlApi}/inmuebles/estado/${estado}`);
}
 
 update(inmueble: Inmueble): Observable<Inmueble>{
  return this.http.put<Inmueble>(`${this.urlApi}/inmueble/${inmueble._id}`,inmueble).pipe(
    catchError(e=>{
      if(e.status==400){
        return throwError(()=>e);
      }
      if(e.error.mensaje){
        console.error(e.error.mensaje);
      }
      return throwError(()=>e);
    })
  );
}
}
