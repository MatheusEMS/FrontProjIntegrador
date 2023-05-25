import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SavesComponent} from "./saves.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [SavesComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
  ]
})
export class SavesModule { }
