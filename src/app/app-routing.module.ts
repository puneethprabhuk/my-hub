import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseTrackerComponent } from './features/expense-tracker/components/expense-tracker/expense-tracker.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { TimeTrackerComponent } from './features/time-tracker/components/time-tracker/time-tracker.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'time-tracker', component: TimeTrackerComponent},
  { path: 'expense-tracker', component: ExpenseTrackerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
