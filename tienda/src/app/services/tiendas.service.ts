import { Tiendas_I } from './../interfaces/Tiendas';

import { StocksTPI } from './../interfaces/stocksTP';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable,BehaviorSubject } from 'rxjs'; 
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TiendasService {
   URL_API:string="http://localhost:3000";
   lista_stores:Array<Tiendas_I>

constructor(private http: HttpClient) { }


get_Stores(){
  return  this.http.get(this.URL_API+'/stores');
}
get_StoreByID(id:string){  
  return  this.http.get(this.URL_API+`/store/${id}`);
}

post_Store(new_tienda:Tiendas_I){
  return this.http.post(this.URL_API+'/newkiosco',new_tienda);
}
put_Store_Stock(up_Stienda:StocksTPI){
  return this.http.post(this.URL_API+'/',up_Stienda);
}



}
