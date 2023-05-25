import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {EditarComponent} from "./editar.component";



@NgModule({
  declarations: [EditarComponent],
  exports: [
    EditarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    HttpClientModule
  ]
})
export class EditarModule { }
