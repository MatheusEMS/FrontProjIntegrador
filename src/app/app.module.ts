import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtinterceptorService} from "./security/jwtinterceptor.service";
import {ErrorHandlerService} from "./security/error-handler.service";
import {LoginModule} from "./login/login.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from './páginas/home/home.component';
import { CriarcontaComponent } from './criarconta/criarconta.component';
import {FormsModule} from "@angular/forms";
import {CriarcontaModule} from "./criarconta/criarconta.module";
import {CommonModule} from "@angular/common";
import { ContaComponent } from './páginas/conta/conta.component';
import { EditarComponent } from './páginas/conta/editar/editar.component';
import { JogosComponent } from './páginas/jogos/jogos.component';
import {AlertModule, ModalModule} from "@coreui/angular";
import { RequisicoesComponent } from './páginas/requisicoes/requisicoes.component';
import { EnviarsaveComponent } from './páginas/enviarsave/enviarsave.component';
import {EnviarsaveModule} from "./páginas/enviarsave/enviarsave.module";
import { SavesComponent } from './páginas/saves/saves.component';
import { ViewsaveComponent } from './páginas/saves/ViewSave/viewsave.component';
import { ConfirmacaoComponent } from './páginas/confirmacao/confirmacao.component';
import { RequisicaoJogoComponent } from './páginas/requisicoes/requisicaoJogo/requisicao-jogo.component';
import { RequisicaoSaveComponent } from './páginas/requisicoes/requisicaoSave/requisicao-save.component';
import { ConfirmacaoReqComponent } from './páginas/confirmacao-req/confirmacao-req.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContaComponent,
    EditarComponent,
    JogosComponent,
    RequisicoesComponent,
    EnviarsaveComponent,
    SavesComponent,
    ViewsaveComponent,
    ConfirmacaoComponent,
    RequisicaoJogoComponent,
    RequisicaoSaveComponent,
    ConfirmacaoReqComponent,
    //CriarcontaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LoginModule,
    CriarcontaModule,
    FormsModule,
    HttpClientModule,
    //ModalModule,
  ],
  providers: [{provide: ErrorHandler, useClass:ErrorHandlerService},
    {provide: HTTP_INTERCEPTORS, useClass:JwtinterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
