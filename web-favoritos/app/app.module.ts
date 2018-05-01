import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }           from './components/app.component';
import { FavoritosListComponent } from './components/favoritos-list.component';

import './rxjs-extensions';
import { FavoritoService } from './services/favorito.service';


@NgModule({
  imports:      [ 
                  BrowserModule,
                  FormsModule,
                  HttpModule
                ],
  declarations: [ 
                  AppComponent ,
                  FavoritosListComponent
  ], providers: [
                  FavoritoService
  ],
  bootstrap:    [ AppComponent ]

})
 
export class AppModule { }
