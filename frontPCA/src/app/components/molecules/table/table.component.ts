import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  headers = ['Name', 'Position', 'Email', 'Phone'];
  rows = [
    ['John Doe', 'Manager', 'john.doe@example.com', '+1 (555) 123-4567'],
    ['Jane Smith', 'Developer', 'jane.smith@example.com', '+1 (555) 987-6543'],
    ['Bob Johnson', 'Designer', 'bob.johnson@example.com', '+1 (555) 456-7890'],
    ['Sarah Lee', 'Accountant', 'sarah.lee@example.com', '+1 (555) 321-0987'],
    ['Tom Wilson', 'Sales', 'tom.wilson@example.com', '+1 (555) 789-0123']
  ];
}
