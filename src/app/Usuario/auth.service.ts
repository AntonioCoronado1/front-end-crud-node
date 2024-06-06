import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';
import { environment } from 'src/environments/environment';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string="";
  private urlApi: string ="";


  constructor(private http: HttpClient) {
    this.urlApi = environment.apiUrl+'/api';
   }
  login(usuario:Usuario):Observable<any>{
    return this.http.post<any>(`${this.urlApi}/auth/login`, usuario)
      .pipe(
        tap(response => {
          localStorage.setItem(this.token, response.token);
        })
      );
  }
  getToken() {
    return localStorage.getItem(this.token);
  }

  isLogged() {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem(this.token);
  }
}
