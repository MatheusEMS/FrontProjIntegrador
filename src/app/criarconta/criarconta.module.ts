import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CriarcontaComponent} from "./criarconta.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [CriarcontaComponent],
  exports: [
  CriarcontaComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    FormsModule,
    HttpClientModule
  ]
})
export class CriarcontaModule { }
