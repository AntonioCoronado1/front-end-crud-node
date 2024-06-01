import { Component, OnInit } from '@angular/core';
import { InmuebleService } from './inmueble.service';
import { Inmueble } from './inmueble';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})
export class InmuebleComponent implements OnInit {
  title = 'Inmueble';     
  inmuebles: Inmueble[]=[];
  constructor(private inmuebleService: InmuebleService) { }
  ngOnInit(): void {
    this.getInmuebles();
  }

  getInmuebles(): void{    
    this.inmuebleService.getInmuebles().subscribe(response => {
       this.inmuebles = response; 
       console.log(this.inmuebles);
    });


  }
}
