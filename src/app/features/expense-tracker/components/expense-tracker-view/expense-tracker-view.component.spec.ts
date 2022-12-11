import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTrackerViewComponent } from './expense-tracker-view.component';

describe('ExpenseTrackerViewComponent', () => {
  let component: ExpenseTrackerViewComponent;
  let fixture: ComponentFixture<ExpenseTrackerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseTrackerViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseTrackerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
