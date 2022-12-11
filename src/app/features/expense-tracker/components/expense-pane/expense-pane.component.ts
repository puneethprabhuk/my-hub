import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-pane',
  templateUrl: './expense-pane.component.html',
  styleUrls: ['./expense-pane.component.scss']
})
export class ExpensePaneComponent implements OnInit {

  @Input() paneType: string;

  constructor() {
    
  }

  ngOnInit(): void {

  }

}
