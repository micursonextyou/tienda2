import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './routes/app-routing.module';
import { AppComponent } from './component/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserAuth } from './services/UserAuth.service';
import { RecobrarPasswordComponent } from './component/auth/recobrar-password/recobrar-password.component';
import { EmailsComponent } from './component/perfile/emails/emails.component';




import { HprinComponent } from './component/cabecera/hprin/hprin.component';
import { AcountMenuComponent } from './component/cabecera/acount-menu/acount-menu.component';
import { PanelTiendasComponent } from './component/secundario/panel-tiendas/panel-tiendas.component';
import { AsaideNavComponent } from './component/perfile/asaide-nav/asaide-nav.component';

import { ResumenComponent } from './component/perfile/resumen/resumen.component';
import { ReputacionComponent } from './component/perfile/reputacion/reputacion.component';
import { MisProductosComponent } from './component/perfile/mis-productos/mis-productos.component';
import { MisVentasComponent } from './component/perfile/mis-ventas/mis-ventas.component';

import { DialogMiSeguridadComponent } from './component/perfile/dialogs/dialog-mi-seguridad/dialog-mi-seguridad.component';
import { DialogMiTiendaComponent } from './component/perfile/dialogs/dialog-mi-tienda/dialog-mi-tienda.component';
import { DialogMisDatosComponent } from './component/perfile/dialogs/dialog-mis-datos/dialog-mis-datos.component';
import { DialogMisProductosComponent } from './component/perfile/dialogs/dialog-mis-productos/dialog-mis-productos.component';

import { SocialLoginModule , AuthServiceConfig } from "./../../node_modules/angularx-social-login/angularx-social-login";
import { GoogleLoginProvider , FacebookLoginProvider } from "./../../node_modules/angularx-social-login/angularx-social-login";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { MaterialModule } from './material-modulo';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HprinComponent,
    AcountMenuComponent,
    PanelTiendasComponent,    
    AsaideNavComponent,      
    EmailsComponent,
    ResumenComponent,  
    ReputacionComponent,  
    MisProductosComponent,
    MisVentasComponent,
    DialogMiSeguridadComponent,
    DialogMiTiendaComponent,
    DialogMisDatosComponent,
    DialogMisProductosComponent,    
    RecobrarPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
