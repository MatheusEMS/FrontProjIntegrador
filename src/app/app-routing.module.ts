import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./páginas/home/home.component";
import {AuthGuardService} from "./security/auth-guard.service";
import {CriarcontaComponent} from "./criarconta/criarconta.component";
import {ContaComponent} from "./páginas/conta/conta.component";
import {EditarComponent} from "./páginas/conta/editar/editar.component";
import {JogosComponent} from "./páginas/jogos/jogos.component";
import {RequisicoesComponent} from "./páginas/requisicoes/requisicoes.component";
import {EnviarsaveComponent} from "./páginas/enviarsave/enviarsave.component";
import {SavesComponent} from "./páginas/saves/saves.component";
import {ViewsaveComponent} from "./páginas/saves/ViewSave/viewsave.component";
import {ConfirmacaoComponent} from "./páginas/confirmacao/confirmacao.component";
import {RequisicaoSaveComponent} from "./páginas/requisicoes/requisicaoSave/requisicao-save.component";
import {RequisicaoJogoComponent} from "./páginas/requisicoes/requisicaoJogo/requisicao-jogo.component";
import {ConfirmacaoReqComponent} from "./páginas/confirmacao-req/confirmacao-req.component";

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuardService]},
  {path: 'login', component: LoginComponent, canActivate:[AuthGuardService]},
  {path: 'conta', component: ContaComponent, canActivate:[AuthGuardService]},
  {path: 'editar', component: EditarComponent, canActivate:[AuthGuardService]},
  {path: 'CriarConta', component: CriarcontaComponent, canActivate:[AuthGuardService]},
  {path: 'jogos/:selectedValue', component: JogosComponent, canActivate:[AuthGuardService]},
  {path: 'requisicoes', component: RequisicoesComponent, canActivate:[AuthGuardService]},
  {path: 'enviar', component: EnviarsaveComponent, canActivate:[AuthGuardService]},
  {path: 'saves/:id/:nome/:console', component: SavesComponent, canActivate:[AuthGuardService]},
  {path: 'viewsave/:idsave/:nome/:console', component: ViewsaveComponent, canActivate:[AuthGuardService]},
  {path: 'confirmacaoUpload', component: ConfirmacaoComponent, canActivate:[AuthGuardService]},
  {path: 'requisicaoSalvamento', component: RequisicaoSaveComponent, canActivate:[AuthGuardService]},
  {path: 'requisicaoJogo', component: RequisicaoJogoComponent, canActivate:[AuthGuardService]},
  {path: 'requisicaoConfirmacao', component: ConfirmacaoReqComponent, canActivate:[AuthGuardService]},
  {path: "**", component: LoginComponent},
  {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
