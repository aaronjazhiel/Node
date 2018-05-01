
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Favorito} from '../models/favorito';

@Injectable()
export class FavoritoService{
    public url : string;

    constructor(private _http: Http){
        this.url = 'http://localhost:3678/api/';
    }

    getFavoritos(){
         return this._http.get(this.url+'favoritos')
                          .map(res => res.json());

    }

   
}