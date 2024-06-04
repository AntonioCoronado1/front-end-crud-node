import { Component, OnInit } from '@angular/core';
import { Inmueble } from '../Inmueble/inmueble';
import { InmuebleService } from './inmueble.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  titulo: string="Agregar Inmueble";
  inmuebles: Inmueble={}; 
  errores: string[]=[];

  constructor(private inmuebleService: InmuebleService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
   
  }
  
  create(): void {
    this.inmuebleService.create(this.inmuebles).subscribe({
      next: (inmuebles: Inmueble) => {
        this.router.navigate(['/inmuebles']);
      },
      error: (err) => {
        this.errores=[];
        if(err.error.errors){
          this.errores = err.error.errors as string[];
        }else if(err.error.error){
          this.errores.push(err.error.mensaje);
          console.error(err.error.error); 

        }       
        console.error('Código del error desde el backend: ' + err.status);
        
      }
    });
  }
  update(): void {
    this.inmuebleService.update(this.inmuebles).subscribe({
      next: (inmueble) => {
        this.router.navigate(['/inmuebles']);
      },
      error: (err) => {
        this.errores = [];
        if (err.error.errors) {
          this.errores = err.error.errors as string[];
        } else if (err.error.error) {
          this.errores.push(err.error.mensaje);
          console.error(err.error.error);
        }
        console.error('Código del error desde el backend: ' + err.status);
      }
    });
  }
  

}
