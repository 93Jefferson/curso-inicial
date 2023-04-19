import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { IDataEmpleado, iEmpleados } from 'src/app/interfaces/empleadosInterfaces';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent {
  listEmpleado: IDataEmpleado[] = [];
  columnTabla: any;
  listMenu: MenuItem[] = [];
  activeItem!: MenuItem;
  constructor(private ruta: Router,    
    private empleadoService: EmpleadoService){
    
  }

  ngOnInit(): void {
    this.iniColumnTabla();
    this.inicioMenu();
    console.log('Hola estoy aqui desde ngOninit');
    // this.empleadoService.getAllEmployee().subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.listEmpleado = res.data;
    //   }, (error) => {
    //     console.log(error);
    //   }
    // );

    this.empleadoService.getAllEmployee().subscribe({
      next: (datos) => {
        console.log(datos);
        this.listEmpleado = datos.data;
      },
      error: (err)=>{
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

  inicioMenu(){
    this.listMenu=[
      {
        label:'Cliente' 
      },
      {
        label:'Empresa' 
      }
    ];

    this.activeItem = this.listMenu[0];

  }

  regresarInicio(){
    this.ruta.navigate(['inicio']);
  }

}
