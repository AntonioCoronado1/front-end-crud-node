import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Visita } from './visita';
import { Cliente } from './cliente';
import { VisitaService } from './visita.service';
import { InmuebleService } from '../Inmueble/inmueble.service';
import { Inmueble } from '../Inmueble/inmueble';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponents implements OnInit{
  titulo: string="Agregar Visita";
  
  visita={
    referencia:0,
    nombre:'',
    fecha:'',
    comentarios:''

  };
  clientes: Cliente[]=[];  
  errores: string[]=[];
  inmuebles: Inmueble[]=[];
  constructor(private visitaService: VisitaService,
    private inmuebleService:InmuebleService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

    ngOnInit(): void {
      this.getClientes();
      this.getCargarInmueble()
    }
    getClientes(): void{
      this.visitaService.getClientes().subscribe(respuesta=>{
        this.clientes=respuesta;
      }
      )
    }
     
    create(): void {
      this.activatedRouter.paramMap.subscribe(params=>{
        let id=params.get('id');
        if(id){
           this.visita.referencia=Number(id)
       this.visitaService.create(this.visita).subscribe({
        next: (visita: Visita) => {
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
      })
      
      
    }
    getCargarInmueble(): void{
      this.activatedRouter.paramMap.subscribe(params=>{
        let id=params.get('id');
         if(id){
           this.inmuebleService.getInmuebleById(Number(id)).subscribe(inmbueble=>{
              this.inmuebles=inmbueble
              console.log(this.inmuebles);
           })
         }
      }) 
  
    }
}
