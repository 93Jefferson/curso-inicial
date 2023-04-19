import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent {
  listMenu: MenuItem[] = [];

  ngOnInit(): void{
    this.inicioMenu();
 
  }

  inicioMenu(){
    this.listMenu=[
      {
        label:'Inicio',
        routerLink:'/inicio' 
      },
      {
        label:'Tabla',
        routerLink:'/tabla'
      }
    ];
  }
}
