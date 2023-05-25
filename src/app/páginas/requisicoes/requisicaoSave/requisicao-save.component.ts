import { Component } from '@angular/core';
import {Usuario} from "../../../login/usuario";
import {ActivatedRoute, Router} from "@angular/router";
import {RequisicoesService} from "../requisicoes.service";
import {RequisicaoSaveService} from "./requisicao-save.service";
import {SavesReq} from "../savesReq";

@Component({
  selector: 'app-requisicao-save',
  templateUrl: './requisicao-save.component.html',
  styleUrls: ['./requisicao-save.component.css']
})
export class RequisicaoSaveComponent {
  usuario : Usuario = this.service.usuario_logado();
  usuarioAtt : Usuario = new Usuario();
  save: SavesReq = new SavesReq();

  constructor(private router: Router,private service: RequisicaoSaveService,private route: ActivatedRoute) {
  }

  ngOnInit(): void{
    this.atualizar()
    this.route.queryParams.subscribe(params => {
      if (params['save']) {
        this.save = JSON.parse(params['save']);
        // Agora você pode usar o objeto "save" na rota de destino conforme necessário
      }
    });
  }

  private atualizar(): void {
    this.service.listar(this.usuario.id).subscribe((dados) => {
      this.usuarioAtt = dados;
    });
  }

  DeletarSave(idSave: string | undefined): void {
    const confirmacao = confirm('Tem certeza de que deseja deletar o save?');

    if (confirmacao) {
      this.service.Deletar(idSave).subscribe((dados) => {
        if (dados == true) {
          this.router.navigate(['/requisicaoConfirmacao'], { queryParams: { meuParametro: true } });
        } else {
          alert('Ocorreu um erro, tente novamente');
        }
      });
    }
  }


  logout(): void{
    this.service.logout();
    //this.reloadCurrentPage()
  }

  reloadCurrentPage() {
    window.location.reload();
  }


  validacaoResumo: Boolean = false
  validacaoDescricao:Boolean = false
  validacaoEmuladores:Boolean = false;
  validacaoConsole:Boolean = false;
  validacaoJogo:Boolean = false;
  validacaoArquivo:Boolean = false;

}
