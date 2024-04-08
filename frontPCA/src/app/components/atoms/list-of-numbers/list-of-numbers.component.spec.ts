import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfNumbersComponent } from './list-of-numbers.component';

describe('ListOfNumbersComponent', () => {
  let component: ListOfNumbersComponent;
  let fixture: ComponentFixture<ListOfNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfNumbersComponent]
    });
    fixture = TestBed.createComponent(ListOfNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
