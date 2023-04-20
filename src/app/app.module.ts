import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table'; 
import { PanelModule } from "primeng/panel";
import { TabMenuModule } from "primeng/tabmenu";
import { MenubarModule } from "primeng/menubar";
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoadingComponent } from './component/loading/loading.component';
import { MenuHeaderComponent } from './component/menu-header/menu-header.component';

import { AppRoutingModule } from './app.routing.module';

import { PaginaTablaComponent } from './pages/pagina-tabla/pagina-tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';


import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PaginaTablaComponent,
    LoadingComponent,
    MenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    PanelModule,
    TabMenuModule,
    MenubarModule,
    ToastModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  // providers: [],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
