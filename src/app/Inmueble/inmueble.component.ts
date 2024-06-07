import { Component, OnInit } from '@angular/core';
import { InmuebleService } from './inmueble.service';
import { Inmueble } from './inmueble';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})
export class InmuebleComponent implements OnInit {
  title = 'Inmueble';     
  inmuebles: Inmueble[]=[];
  inmueble: Inmueble={};
  referencia = 0;

  constructor(private inmuebleService: InmuebleService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }
  ngOnInit(): void {
    this.getInmuebles();
    this.getInmueblesByFiltro();
  }

  getInmuebles(): void{    
    this.inmuebleService.getInmuebles().subscribe(response => {
       this.inmuebles = response; 
       
    });
  }
  getInmueblesByFiltro(): void{    
    this.activatedRouter.paramMap.subscribe(params=>{
      let id=params.get('id');
       if(id){
         this.inmuebleService.getInmuebleBy(String(id)).subscribe(inmueble=>{
            this.inmuebles=inmueble;
            
         })
       }
    }) 
  }

}
