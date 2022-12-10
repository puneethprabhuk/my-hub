import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
