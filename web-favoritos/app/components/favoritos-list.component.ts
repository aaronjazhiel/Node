
import { Component, OnInit } from '@angular/core';

import {Favorito} from '../models/favorito';
import {FavoritoService} from '../services/favorito.service';


@Component({
    selector: 'my-favorito',
    templateUrl: '/app/views/favoritos-list.html'
  
   
})
 
// Clase del componente donde irán los datos y funcionalidades
export class FavoritosListComponent implements OnInit {

    public titulo : string;
    public errorMessage;
    
  
    constructor(
        private _favoritoService : FavoritoService
    ){
      this.titulo = "Listado de marcadores"; 
    }

    
    ngOnInit(){
        console.log('FavoritosListComponent cargando!!');
        this._favoritoService.getFavoritos().subscribe(
             result =>{
                console.log(result);
             },
             error => {
                 this.errorMessage = <any> error;
                if(this.errorMessage != null){
                    console.log(this.errorMessage);
                    alert('Error en la petición');
                 }
             }  
             
        );
    } 
    
 }
