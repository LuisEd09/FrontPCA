import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent {
  //@Input() label?: string;
  @Input() label: string = "Ver Detalles";

  @Output() onClick = new EventEmitter<Event>();
}
