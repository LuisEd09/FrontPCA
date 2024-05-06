import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent {
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() subcategories: { text: string, url: string }[] = [];

  isOpen: boolean = false;

  toggleSubcategories() {
    this.isOpen = !this.isOpen;
  }
}
