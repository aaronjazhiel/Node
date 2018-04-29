import {Component, OnInit} from '@angular/core';
import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito'; 



@Component({
    selector: 'my-app',
    templateUrl: '/app/views/home.html'
   // providers: [FavoritoService]
})
 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent implements OnInit{

    public titulo : string;
    public descripcion : string;

    constructor(){
  
      this.titulo = "SICODO";
      this.descripcion = "Sistema de Control Documental"
    }

    ngOnInit(){
        
    }
  

 }
