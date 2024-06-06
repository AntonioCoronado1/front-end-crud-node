import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  titulo = 'Por Favor Inicie Sesion';
  usuario: Usuario={};
  error: string = '';
  
  constructor(private authservice: AuthService,
    private router: Router) { }

    login() {
      console.log(this.usuario);
      this.authservice.login(this.usuario)
        .subscribe(
          () => {
            this.router.navigate(['/inmuebles']); // Redirigir a la página de dashboard después del inicio de sesión exitoso
          },
          error => {
            this.error = error.error.msg; // Mostrar mensaje de error en caso de credenciales incorrectas u otro error
          }
        );
    }

}
