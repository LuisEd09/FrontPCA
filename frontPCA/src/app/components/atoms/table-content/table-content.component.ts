import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.css']
})
export class TableContentComponent {
  @Input() rows: any[][] = [];
}
