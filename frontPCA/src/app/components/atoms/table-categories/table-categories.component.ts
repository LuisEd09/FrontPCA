import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-categories',
  templateUrl: './table-categories.component.html',
  styleUrls: ['./table-categories.component.css']
})
export class TableCategoriesComponent {
  @Input() headers: string[] = [];
}
