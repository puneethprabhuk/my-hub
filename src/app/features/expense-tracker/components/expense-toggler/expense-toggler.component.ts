import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-toggler',
  templateUrl: './expense-toggler.component.html',
  styleUrls: ['./expense-toggler.component.scss']
})
export class ExpenseTogglerComponent {

  incomeSelected = true;

  selectExpense(): void {
    this.incomeSelected = false;
  }

  selectIncome(): void {
    this.incomeSelected = true;
  }

}
