import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmacaoComponent} from "./confirmacao.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [ConfirmacaoComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    FormsModule,
    HttpClientModule
  ]
})
export class ConfirmacaoModule { }
