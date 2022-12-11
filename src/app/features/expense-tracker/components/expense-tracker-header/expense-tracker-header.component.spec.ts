import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTrackerHeaderComponent } from './expense-tracker-header.component';

describe('ExpenseTrackerHeaderComponent', () => {
  let component: ExpenseTrackerHeaderComponent;
  let fixture: ComponentFixture<ExpenseTrackerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseTrackerHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseTrackerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
