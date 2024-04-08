import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-tittle-side-bar',
  templateUrl: './tittle-side-bar.component.html',
  styleUrls: ['./tittle-side-bar.component.css']
})
export class TittleSideBarComponent {
  @Input() label: string = "Actividades";
}
