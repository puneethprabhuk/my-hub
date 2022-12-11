import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensePaneComponent } from './expense-pane.component';

describe('ExpensePaneComponent', () => {
  let component: ExpensePaneComponent;
  let fixture: ComponentFixture<ExpensePaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensePaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
