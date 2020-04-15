import { Articulosinterface_I } from './../interfaces/Articulos';

import { Injectable } from '@angular/core';
import { ProductosEnStock_I } from '../interfaces/productosEnStock';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private subTotal:number=0;// cantidad de articulos
  private Lista_Temp_items=[]; // almacena los item agregados al carrito
  private importe=0;// valor total del pedido
  private total_pedido:number=0;
  private comicion:number=22;

constructor() { }

// dispara un toas 
show(unid:number,articulo:string){
  
}
showModif(unid:number,articulo:string){
  
}
showDropp(){
  
}


// agrega articulos a la lista
AddItem(item:ProductosEnStock_I,unid:number){
    let subt=unid*item.precio;
    
    this.Lista_Temp_items.push({"item":item,"cant":unid,"precio":subt});
    this.show( unid,item.descripcion);
}
// eliminar item del pedido
DropItem(itemDrop:number):void{     
    if ( itemDrop > -1 ) {
      this.Lista_Temp_items.splice( itemDrop, 1 );
      this.showDropp();
    }
}
UpItem(upitemcan,upindexitem):void{
  if ( upindexitem > -1 ) {
    
    
    this.Lista_Temp_items[upindexitem].cant=upitemcan;
    this.showModif(upitemcan,this.Lista_Temp_items[upindexitem].descripcion);
  }



}
/*
    Actualiza la base de datos de los productos,
    y registro la nueva venta.
*/
ConfirmPedido(){}

// devuelve la lista de articulos del carrito
get_Lista_carrito(){
  return this.Lista_Temp_items;
}




}
