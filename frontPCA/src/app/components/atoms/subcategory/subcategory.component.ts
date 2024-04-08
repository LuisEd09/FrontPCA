import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent {
  @Input() icono?: string;
  @Input() texto?: string;
  @Input() subcategorias: { texto: string, ruta: string }[] = [];

  showSubMenu = false;

  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }
}
