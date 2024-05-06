import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {
  categories = [
    { icon: 'schedule', text: 'Nuevo Empleado', url: '/nuevo-empleado' },
    { icon: 'schedule', text: 'Inventario', url: '/inventario' },
    { icon: 'schedule', text: 'Medico', url: '/medico' },
    { icon: 'schedule', text: 'Reportes', url: '/reportes' }
  ];

  subcategories = [
    {
      icon: 'schedule',
      text: 'Pendientes',
      subcategories: [
        { text: 'Tareas pendientes', url: '/tareas-pendientes' },
        { text: 'Reportes pendientes', url: '/reportes-pendientes' },
        { text: 'Autorizaciones pendientes', url: '/autorizaciones-pendientes' }
      ]
    },
    {
      icon: 'schedule',
      text: 'Empleados',
      subcategories: [
        { text: 'Empleados activos', url: '/empleados-activos' },
        { text: 'Empleados inactivos', url: '/empleados-inactivos' }
      ]
    }
  ];
}

