import { Component, OnInit } from '@angular/core';
import { InmuebleService } from './inmueble.service';
import { VisitaService } from '../Visita/visita.service';
import { Visita } from '../Visita/visita';
import { Inmueble } from './inmueble';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-inmueble',
  templateUrl: './detalle-inmueble.component.html',
  styleUrls: ['./detalle-inmueble.component.css']
})
export class DetalleInmuebleComponent  implements OnInit {
  title = 'Inmueble';     
  inmuebles: Inmueble[]=[];
  visitas: Visita[]=[];
  constructor(private inmuebleService: InmuebleService,
    private visitaService: VisitaService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.getCargarInmueble(),
    this.getVisitas()
  }
  getCargarInmueble(): void{
    this.activatedRouter.paramMap.subscribe(params=>{
      let id=params.get('id');
       if(id){
         this.inmuebleService.getInmuebleById(Number(id)).subscribe(inmueble=>{
            this.inmuebles=inmueble;
            
         })
       }
    }) 

  }
  getVisitas(): void{
    this.activatedRouter.paramMap.subscribe(params=>{
      let id=params.get('id');
       if(id){
         this.visitaService.getVisitas(Number(id)).subscribe(visita=>{
            this.visitas=visita;
            console.log(this.visitas);
         })
       }
    })
  }
  

}
