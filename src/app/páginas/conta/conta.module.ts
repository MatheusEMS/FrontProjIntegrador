import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ContaComponent} from "./conta.component";
import { ModalModule} from "@coreui/angular";

import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [ContaComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
  ]
})
export class ContaModule { }
