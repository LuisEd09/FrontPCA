import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent {
  showSubMenu = false;
  @ViewChild('submenu', { static: true }) submenuRef?: ElementRef<HTMLDivElement>;

  toggleSubMenu(event: Event, submenu: HTMLDivElement) {
    this.showSubMenu = !this.showSubMenu;
    event.stopPropagation();
    submenu.classList.toggle('show');
  }
}
