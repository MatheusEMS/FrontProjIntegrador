import { Component } from '@angular/core';
import {Usuario} from "../../../login/usuario";
import {SavesReq} from "../savesReq";
import {ActivatedRoute, Router} from "@angular/router";
import {RequisicaoSaveService} from "../requisicaoSave/requisicao-save.service";
import {RequisicaoJogoService} from "./requisicao-jogo.service";

@Component({
  selector: 'app-requisicao-jogo',
  templateUrl: './requisicao-jogo.component.html',
  styleUrls: ['./requisicao-jogo.component.css']
})
export class RequisicaoJogoComponent {
  usuario : Usuario = this.service.usuario_logado();
  usuarioAtt : Usuario = new Usuario();
  save: SavesReq = new SavesReq();
  selectedFile: File | undefined;

  constructor(private router: Router,private service: RequisicaoJogoService,private route: ActivatedRoute) {
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

  DeletarSave(idSave: string | undefined): void {

    this.validacaoJogo = false
    if(this.save.requisicao_nomeJogo != undefined && this.save.requisicao_nomeJogo.trim().length > 0) {
      const confirmacao = confirm('Tem certeza que quer cancelar? Irá apagar toda a requisição');
      if (confirmacao) {
        this.service.Deletar(idSave).subscribe((dados) => {
          if (dados == true) {
            this.router.navigate(['/requisicaoConfirmacao'], {queryParams: {meuParametro: true}});
          } else {
            alert('Ocorreu um erro, tente novamente');
          }
        });
      }
    }else{
      this.validacaoJogo = true
    }
  }

  AdicionarJogo():void {
    this.validacaoJogo = false
    this.validacaoCapa = false
    this.erroValidacao = false


    if(this.selectedFile != undefined){
      this.validacaoCapa = false
    }else {
      this.erroValidacao = true
      this.validacaoCapa = true

    }

    if(this.save.requisicao_nomeJogo != undefined && this.save.requisicao_nomeJogo.trim().length > 0){
      this.validacaoJogo = false
    }else {
      this.erroValidacao = true
      this.validacaoJogo = true

    }

    if(this.erroValidacao == false) {
      const formData = new FormData();
      formData.append('file', this.selectedFile!, this.selectedFile!.name);
        this.service.CadastrarJogo(this.save.requisicao_nomeJogo,formData,this.save.id_save).subscribe((dados) => {
          if (dados == null) {
            alert('Ocorreu um erro, tente novamente');
          } else {
            this.router.navigate(['/requisicaoSalvamento']);
          }
        })
    }
  }

  handleFileSelected(event: Event) {
    this.selectedFile = (event.target as HTMLInputElement).files?.[0];
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

  validacaoConsole:Boolean = false;
  validacaoJogo:Boolean = false;
  validacaoCapa:Boolean = false;
  erroValidacao: Boolean = false;
}
