import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-of-numbers',
  templateUrl: './list-of-numbers.component.html',
  styleUrls: ['./list-of-numbers.component.css']
})
export class ListOfNumbersComponent {
  @Input() numero1: number = 10;
  @Input() numero2: number = 50;
  @Input() numero3: number = 300;
}
