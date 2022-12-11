import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';

import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
