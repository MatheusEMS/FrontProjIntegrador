import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RequisicoesComponent} from "./requisicoes.component";



@NgModule({
  declarations: [RequisicoesComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    FormsModule,
    HttpClientModule
  ]
})
export class RequisicoesModule { }
