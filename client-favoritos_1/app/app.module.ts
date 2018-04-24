import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './components/app.component';


import { FavoritosListComponent } from './components/favoritos-list.component';



@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ 
                  AppComponent ,
                  FavoritosListComponent

  ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }
