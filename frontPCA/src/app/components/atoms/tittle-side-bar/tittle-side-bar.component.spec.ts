import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TittleSideBarComponent } from './tittle-side-bar.component';

describe('TittleSideBarComponent', () => {
  let component: TittleSideBarComponent;
  let fixture: ComponentFixture<TittleSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TittleSideBarComponent]
    });
    fixture = TestBed.createComponent(TittleSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
