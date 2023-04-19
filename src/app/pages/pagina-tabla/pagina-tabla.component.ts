import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IDataEmpleado } from 'src/app/interfaces/empleadosInterfaces';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css'],
  
})
export class PaginaTablaComponent {
  listEmpleado: IDataEmpleado[] = [];
  columnTabla: any;
  
  constructor(private ruta: Router,    
    private empleadoService: EmpleadoService,
    private message: MessageService
    ){
    
  }

  ngOnInit(): void {
    this.iniColumnTabla();
     console.log('Hola estoy aqui desde ngOninit');
  
    this.empleadoService.getAllEmployee().subscribe({
      next: (datos) => {
        console.log(datos);
        this.listEmpleado = datos.data;
        this.message.add({ severity: 'success', summary: 'Success', detail: 'Proceso exitoso!' });

      },
      error: (err)=>{
        this.message.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema! codigo error: '+err.status });
        console.log(err);
      }
    });

  }

  iniColumnTabla(){
    this.columnTabla=[
      {
        field:'id', header:'ID'
      },
      {
        field:'name', header:'Nombre Empleado'
      },
      {
        field:'salary', header:'Salario Empleado'
      },
      {
        field:'edad', header:'EDAD'
      },  
  ];
  }

  
  regresarInicio(){
    this.ruta.navigate(['inicio']);
  }

}
