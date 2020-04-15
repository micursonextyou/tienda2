import { StocksTPI } from './stocksTP';
import { User_I } from './User';
export interface Tiendas_I {
   
        _id:string;
        nombre:string;
        telefono:string;
        direccion:string;
        horarios:Array<string>;
        images:string;
        users:User_I;
        stocktiendas:Array<StocksTPI>;
    
    
}
