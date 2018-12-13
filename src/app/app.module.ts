import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { HttpClientModule } from '@angular/common/http';
import { ImnobiliariaCardComponent } from './componentes/imnobiliaria-card/imnobiliaria-card.component';
import { LoginComponent } from './componentes/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    FormularioComponent,
    ImnobiliariaCardComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//peticiones Http
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
