// Importar Component desde el núcleo de Angular
import {Component , OnInit} from '@angular/core';
import {Favorito} from '../models/favorito';
import {FavoritoService} from '../services/favorito.service';
import { ProviderAst } from '@angular/compiler';



 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-favorito',
    templateUrl: '/app/views/favoritos-list.html'
    ,providers:[FavoritoService]
   
})
 
// Clase del componente donde irán los datos y funcionalidades
export class FavoritosListComponent {

    public titulo : string;
    public errorMessage;
    
  
    constructor(
     
    ){
      this.titulo = "Listado de marcadores"; 
    }

 
   
 }
