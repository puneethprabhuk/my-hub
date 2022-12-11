import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-tracker-view',
  templateUrl: './expense-tracker-view.component.html',
  styleUrls: ['./expense-tracker-view.component.scss']
})
export class ExpenseTrackerViewComponent {

  addIncomeMode: boolean = false;

  onAddIncome(): void {
    this.addIncomeMode = true;
  }

  onCancelAddIncome(): void {
    this.addIncomeMode = false;
  }

  onSaveIncome(): void {
    this.addIncomeMode = false;
  }

}
