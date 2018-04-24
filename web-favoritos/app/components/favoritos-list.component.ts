// Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-favorito',
    templateUrl: '/app/views/favoritos-list.html'
})
 
// Clase del componente donde irán los datos y funcionalidades
export class FavoritosListComponent {

    public titulo : string;
  
    
    constructor(){
      this.titulo = "Listado de marcadores";
      
    }
   
 }
