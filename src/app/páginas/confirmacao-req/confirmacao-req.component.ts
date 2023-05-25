import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RequisicaoSaveService} from "../requisicoes/requisicaoSave/requisicao-save.service";
import {ConfirmacaoReqService} from "./confirmacao-req.service";
import {Usuario} from "../../login/usuario";

@Component({
  selector: 'app-confirmacao-req',
  templateUrl: './confirmacao-req.component.html',
  styleUrls: ['./confirmacao-req.component.css']
})
export class ConfirmacaoReqComponent {

  Foideletado: Boolean = false
  usuario : Usuario = this.service.usuario_logado();
  usuarioAtt : Usuario = new Usuario();

  constructor(private router: Router,private service: ConfirmacaoReqService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.atualizar()
    this.route.queryParams.subscribe(params => {
      this.Foideletado = params['meuParametro'];
      alert(this.Foideletado)// Obtém o valor booleano da URL
    });
  }

  private atualizar(): void {
    this.service.listar(this.usuario.id).subscribe((dados) => {
      this.usuarioAtt = dados;
    });
  }

  logout(): void{
    this.service.logout();
    //this.reloadCurrentPage()
  }

}
