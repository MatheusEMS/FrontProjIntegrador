import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Usuario} from "../../login/usuario";
import {RequisicoesService} from "./requisicoes.service";
import {SavesReq} from "./savesReq";


@Component({
  selector: 'app-requisicoes',
  templateUrl: './requisicoes.component.html',
  styleUrls: ['./requisicoes.component.css']
})
export class RequisicoesComponent implements OnInit{

  usuario : Usuario = this.service.usuario_logado();
  usuarioAtt : Usuario = new Usuario();
  ReqSaves: SavesReq[] = []

  constructor(private router: Router,private service: RequisicoesService) {
  }

  ngOnInit(): void{
    this.atualizar()
    this.LerReqSaves()
  }

  private atualizar(): void {
    this.service.listar(this.usuario.id).subscribe((dados) => {
      this.usuarioAtt = dados;
    });
  }

  LerReqSaves():void{
    this.service.lerRequisicoes().subscribe((dados) => {

      this.ReqSaves = dados;
      if (dados == null){
        this.mensagemDeNulo = true
        //pegar nome console e nome usuário
      }else{
        this.mensagemDeNulo = false
      }
    });
  }


  logout(): void{
    this.service.logout();
    this.reloadCurrentPage()
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  IrparaRequisicao(save: SavesReq):void{
  if(save.requisicao_nomeJogo != undefined && save.requisicao_nomeJogo.trim().length > 0 ){
    this.router.navigate(['/requisicaoJogo'],{ queryParams: { save: JSON.stringify(save) } });
  }else {
    this.router.navigate(['/requisicaoSalvamento'],{ queryParams: { save: JSON.stringify(save) } });
  }
  }

  mensagemDeNulo:boolean = false

}
