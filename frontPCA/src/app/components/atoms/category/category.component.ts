import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() icono?: string;
  @Input() texto?: string;
  @Input() ruta?: string;
  
}
