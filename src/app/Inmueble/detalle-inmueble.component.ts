import { Component, OnInit } from '@angular/core';
import { InmuebleService } from './inmueble.service';
import { Inmueble } from './inmueble';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-inmueble',
  templateUrl: './detalle-inmueble.component.html',
  styleUrls: ['./detalle-inmueble.component.css']
})
export class DetalleInmuebleComponent  implements OnInit {
  title = 'Inmueble';     
  inmuebles: Inmueble={};
  constructor(private inmuebleService: InmuebleService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.getCargarInmueble()
  }
  getCargarInmueble(): void{
    this.activatedRouter.paramMap.subscribe(params=>{
      let id=params.get('id');
       if(id){
         this.inmuebleService.getInmueble(String(id)).subscribe(inmueble=>{
            this.inmuebles=inmueble;
            console.log(inmueble);
         })
       }
    }) 

  }
  

}
