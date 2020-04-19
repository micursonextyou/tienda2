

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from '../component/principal/principal.component';
import { LoginComponent } from '../component/auth/login/login.component';
import { RegistroUsuarioComponent } from '../component/auth/registro-Usuario/registro-Usuario.component';
import { TiendaComponent } from '../component/secundario/tienda/tienda.component';
import { CarritoComponent } from '../component/secundario/carrito/carrito.component';
import { MisDatosComponent } from '../component/perfile/mis-datos/mis-datos.component';
import { MiTiendaComponent } from '../component/perfile/mi-tienda/mi-tienda.component';
import { ComprasComponent } from '../component/perfile/compras/compras.component';
import { SeguridadComponent } from '../component/perfile/seguridad/seguridad.component';


const routes: Routes = [
  { path:'inicio', component: PrincipalComponent },
  { path:'sigin', component: LoginComponent},
  { path:'registro', component: RegistroUsuarioComponent},
  { path:'tienda/:id',component:TiendaComponent},
  { path:'carrito', component: CarritoComponent},
  { path:'misdatos/:id',component:MisDatosComponent},
  { path:'mitienda',component:MiTiendaComponent},
  { path:'miscompras/:id',component:ComprasComponent},
  { path:'seguridad',component: SeguridadComponent},
  { path:'',redirectTo:'inicio',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[PrincipalComponent,LoginComponent,RegistroUsuarioComponent,
  TiendaComponent,CarritoComponent,MisDatosComponent,MiTiendaComponent,
ComprasComponent,SeguridadComponent];