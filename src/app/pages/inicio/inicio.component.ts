import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EmpleadoService } from 'src/app/services/empleado.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
nombre = "Fabian";
apellido = "Guaranda";
loadingVisible = false;

formEmpleado!: FormGroup;

constructor(private ruta: Router,
  private message: MessageService,
  private serviceEmpleado: EmpleadoService){
    
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
  this.formEmpleado = new FormGroup(
    {
      name: new FormControl('',[Validators.required]),
      salary: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required]),
    }
  );
}

verificar(){
  console.log(this.formEmpleado);

  if (this.formEmpleado.valid){
    // this.message.add({ severity: 'success', summary: 'Success', detail: 'Proceso exitoso!' });
    this.crearEmpleado();
  }
  else{
    this.message.add({ severity: 'error', summary: 'Error', detail: 'Por favor llene el campo requerido!' });
  }
}

crearEmpleado(){
  
  this.loadingVisible = true;

  this.serviceEmpleado.createEmployee(this.formEmpleado.value.name, 
    this.formEmpleado.value.salary, 
    this.formEmpleado.value.age).subscribe({
      next:(data)=>{
        this.loadingVisible = false;
        console.log(data);
        this.formEmpleado.reset();
        this.message.add({ severity: 'success', summary: 'Success', detail: 'Proceso exitoso!' });
      },
      error: (err)=>{
        this.loadingVisible = false;
        this.message.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema! codigo error: '+err.status });
        console.log(err);
      }

    });
}

}

