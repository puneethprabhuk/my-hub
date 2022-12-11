import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTogglerComponent } from './expense-toggler.component';

describe('ExpenseTogglerComponent', () => {
  let component: ExpenseTogglerComponent;
  let fixture: ComponentFixture<ExpenseTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseTogglerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
