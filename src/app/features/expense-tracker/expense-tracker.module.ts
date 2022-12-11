import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseTrackerComponent } from './components/expense-tracker/expense-tracker.component';
import { ExpenseTrackerHeaderComponent } from './components/expense-tracker-header/expense-tracker-header.component';
import { ExpenseTrackerAddComponent } from './components/expense-tracker-add/expense-tracker-add.component';
import { ExpenseTrackerViewComponent } from './components/expense-tracker-view/expense-tracker-view.component';

import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { TransactionCardComponent } from './components/transaction-card/transaction-card.component';
import { ExpensePaneComponent } from './components/expense-pane/expense-pane.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ExpenseTogglerComponent } from './components/expense-toggler/expense-toggler.component';





@NgModule({
  declarations: [
    ExpenseTrackerComponent,
    ExpenseTrackerHeaderComponent,
    ExpenseTrackerAddComponent,
    ExpenseTrackerViewComponent,
    BalanceCardComponent,
    TransactionCardComponent,
    ExpensePaneComponent,
    ExpenseTogglerComponent,

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
  ]
})
export class ExpenseTrackerModule { }
