import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {
  categories = [
    { icon: 'home', text: 'Home', url: '/dashboard' }
  ];

  subcategories = [
    {
      icon: 'person_add',
      text: 'Empleados',
      subcategories: [
        { text: 'Nuevo empleado', url: '/nuevoEmpleado' },
        { text: 'Nuevo candidato', url: '/nuevoCandidato' },
        { text: 'Nuevo administrativo', url: '/nuevoAdministrativo' },
      ]
    },
    {
      icon: 'person_apron',
      text: 'Trabajadores',
      subcategories: [
        { text: 'Empleados activos', url: '/empleados-activos' },
        { text: 'Empleados inactivos', url: '/empleados-inactivos' },
        { text: 'Candidatos', url: '/candidatos' },
      ]
    },
    {
      icon: 'list_alt',
      text: 'Reportes',
      subcategories: [
        { text: 'Asistencia Diaria', url: '/tareas-pendientes' },
        { text: 'Faltas', url: '/reportes-pendientes' },
        { text: 'Faltas mensuales', url: '/autorizaciones-pendientes' },
      ]
    },
    {
      icon: 'groups',
      text: 'Foraneos',
      subcategories: [
        { text: 'Foraneos', url: '/autorizaciones-pendientes' },
        { text: 'Rutas', url: '/autorizaciones-pendientes' },
        { text: 'Shelters', url: '/autorizaciones-pendientes' }
      ]
    },
    {
      icon: 'schedule',
      text: 'Pendientes',
      subcategories: [
        { text: 'Pendientes IMSS', url: '/tareas-pendientes' },
        { text: 'Pendientes Contrato', url: '/reportes-pendientes' },
        { text: 'Pendientes Carta', url: '/autorizaciones-pendientes' }
      ]
    },
  ];
}

