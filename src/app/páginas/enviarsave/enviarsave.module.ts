import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EnviarsaveComponent} from "./enviarsave.component";



@NgModule({
  //ver oq acontece
  declarations: [],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    FormsModule,
    HttpClientModule
  ]
})
export class EnviarsaveModule { }
