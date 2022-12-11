import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseTrackerComponent } from './components/expense-tracker/expense-tracker.component';
import { ExpenseTrackerHeaderComponent } from './components/expense-tracker-header/expense-tracker-header.component';
import { ExpenseTrackerAddComponent } from './components/expense-tracker-add/expense-tracker-add.component';
import { ExpenseTrackerViewComponent } from './components/expense-tracker-view/expense-tracker-view.component';

import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    ExpenseTrackerComponent,
    ExpenseTrackerHeaderComponent,
    ExpenseTrackerAddComponent,
    ExpenseTrackerViewComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ExpenseTrackerModule { }
