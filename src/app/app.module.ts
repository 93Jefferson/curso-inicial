import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoadingComponent } from './component/loading/loading.component';
import { AppRoutingModule } from './app.routing.module';
import { PaginaTablaComponent } from './pages/pagina-tabla/pagina-tabla.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PaginaTablaComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
