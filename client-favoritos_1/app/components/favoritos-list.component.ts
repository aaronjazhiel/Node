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
    public descripcion : string;
    public favoritos : Array <String>;
    public favoritosVisibles : boolean ;
    public color : string ;
    
    constructor(){
      this.titulo = "Listado de marcadores";
      this.favoritos = ['aaronjazhiel.com','pasale paisano','www.google.com'];
      this.favoritosVisibles = true; 
    }
    
    
    public  showFavoritos(){
        this.favoritosVisibles = false;
    }
    public  hideFavoritos(){
        this.favoritosVisibles = true;
    }

    public changeColor(){
         this.color = "red";
    }
 }
