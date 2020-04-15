import { Articulosinterface_I } from './Articulos';
export interface ProductosEnStock_I {
    _id:string,
    productos:Articulosinterface_I,
    descripcion: string,  // sis ene una hamburguesa doble carne
    ingredientes: Array<string>,  // coron coca-cola buwaiser prime camaleon manaos,s
    cantidad: number,
    precio: number 

}
