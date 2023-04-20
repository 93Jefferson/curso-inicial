import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
nombre = "Fabian";
apellido = "Guaranda";
loadingVisible = false;

formUsuario!: FormGroup;

constructor(private ruta: Router,
  private message: MessageService){
    
}



ngOnInit(): void {
  this.buildFormulario();  
}

visualizarLoading(){
  this.loadingVisible = true;
  setTimeout(() => {
    this.loadingVisible = false;
  }, 2000); 
}

irPaginaTabla(){
  this.ruta.navigate(['tabla']);
}


buildFormulario(){
  this.formUsuario = new FormGroup(
    {
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
    }
  );
}

verificar(){
  console.log(this.formUsuario);

  if (this.formUsuario.valid){
    this.message.add({ severity: 'success', summary: 'Success', detail: 'Proceso exitoso!' });
  }
  else{
    this.message.add({ severity: 'error', summary: 'Error', detail: 'Por favor llene el campo requerido!' });

  }
}


}

