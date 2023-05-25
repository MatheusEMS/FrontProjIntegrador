import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JogosService} from "../jogos/jogos.service";
import {EnviarsaveService} from "./enviarsave.service";
import {Usuario} from "../../login/usuario";
import {jogos} from "../jogos/jogos";
import {Saves} from "../saves/saves";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-enviarsave',
  templateUrl: './enviarsave.component.html',
  styleUrls: ['./enviarsave.component.css']
})
export class EnviarsaveComponent implements OnInit{

  @ViewChild('saveForm') form: NgForm | undefined;
  usuario : Usuario = this.service.usuario_logado();
  usuarioAtt : Usuario = new Usuario();
  ValorConsoleId: string | undefined;
  selectedConsole: string = 'Escolha um console';
  selectedGame: string | undefined;
  ValorJogoId: string | undefined;
  jogos: jogos[] = []
  saveCadastrar: Saves = new Saves();
  erroValidacao: Boolean = false;
  selectedFile: File | undefined;



  constructor(private router: Router,private service: EnviarsaveService,private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    if(this.usuario != null){
      this.atualizar()
    }
  }

  private atualizar(): void {
    this.service.listar(this.usuario.id).subscribe((dados) => {
      this.usuarioAtt = dados;
    });
  }

  private carregar(valor: string): void {
    this.service.lerJogos(valor).subscribe((dados) => {
      this.jogos = dados;
      if (this.jogos != null){
        this.selectedGame = 'Escolha um jogo';
      }else {
        this.selectedGame = 'Esse console não possui jogos';
        //tran  car dropdown
      }

    });
  }

  SetarConsole(idConsole:string,console: string){
    this.ValorConsoleId = idConsole;
    this.selectedConsole = console;
    this.ValorJogoId = undefined;


    //this.setAriaLabel(this.selectedConsole);
    this.carregar(this.selectedConsole)

  }

  SetarJogo(idjogo:string | undefined,jogo: string | undefined){
    if (idjogo == '' && jogo == ''){
      this.ValorJogoId = undefined;
      this.selectedGame = undefined;
    }else {
      this.ValorJogoId = idjogo;
      this.selectedGame = jogo;

    }

  }

  CadastrarSave(): void{
    //fazer verficacao no front

    this.validacaoConsole = false
    this.validacaoJogo = false
    //this.validacaoArquivo = false adicionar verificao
    this.erroValidacao = false




    if (this.selectedFile) {
      this.validacaoArquivo = false
      this.saveCadastrar.arquivo = ''
    }else {
      this.erroValidacao = true
      this.validacaoArquivo = true
    }

    if(this.saveCadastrar.resumo == undefined || this.saveCadastrar.resumo.trim().length == 0){
      this.erroValidacao = true
      this.validacaoResumo = true
    }else {
      this.validacaoResumo = false
    }
    if(this.saveCadastrar.descricao == undefined || this.saveCadastrar.descricao.trim().length == 0){
      this.erroValidacao = true
      this.validacaoDescricao = true
    }else {
      this.validacaoDescricao = false
    }
    if(this.saveCadastrar.emuladores == undefined || this.saveCadastrar.emuladores.trim().length == 0){
      this.erroValidacao = true
      this.validacaoEmuladores = true
    }else {
      this.validacaoEmuladores = false
    }

    if(this.ValorConsoleId != undefined && this.ValorConsoleId.trim().length > 0) {
      //alert("entrou console")
      if (this.ValorJogoId != undefined) {
        //alert('entoru selecionadno jogo primeira parte')
        if (this.saveCadastrar.requisicao_nomeJogo == undefined || this.saveCadastrar.requisicao_nomeJogo.trim().length == 0) {

          //alert('entoru selecionadno jogo')
          if(this.erroValidacao == false) {
            const formData = new FormData();
            formData.append('file', this.selectedFile!, this.selectedFile!.name);

            this.service.SalvarImagem(formData).subscribe((dados)=>{
              alert(dados)
              if (dados == true){
                this.service.cadastrarSave(this.saveCadastrar, this.ValorConsoleId,
                  this.ValorJogoId, this.usuario.id).subscribe((dados) => {
                  if (dados != null) {
                    this.router.navigate(['/confirmacaoUpload'])
                  }
                })
              }else {
                alert("deu erro")
              }
            })


          }

        }
        //mostrar os erros na tela - selecionou o jogo e colocou para adicionar jogo
      } else if (this.saveCadastrar.requisicao_nomeJogo != undefined
        && this.saveCadastrar.requisicao_nomeJogo.trim().length > 0) {

        if (this.saveCadastrar.idJogo == undefined || this.saveCadastrar.idJogo.trim().length == 0) {

          //alert('quer cadastrar')

          //jogo que nao existe para requisicao
          if(this.erroValidacao == false) {
            this.ValorJogoId = '4';
            const formData = new FormData();
            formData.append('file', this.selectedFile!, this.selectedFile!.name);

            this.service.SalvarImagem(formData).subscribe((dados)=>{
              alert(dados)
              if (dados == true){
                this.service.cadastrarSave(this.saveCadastrar, this.ValorConsoleId,
                  this.ValorJogoId, this.usuario.id).subscribe((dados) => {
                  if (dados != null) {
                    this.router.navigate(['/confirmacaoUpload'])
                  }
                })
              }else {
                alert("deu erro")
              }
            })

          }

        }
        //mostrar os erros na tela - selecionou o jogo e colocou para adicionar jogo
      }else {
        this.validacaoJogo = true
      }
      //nao selecionou o jogo
    }else{
      this.validacaoConsole = true
    }



  }

  setAriaLabel(label: string | undefined): void {
    this.elementRef.nativeElement.querySelector('.dropdown-toggle').setAttribute('aria-label', label);
  }

  logout(): void{
    this.service.logout();
    this.router.navigate(['/home']);
  }


  handleFileSelected(event: Event) {
    this.selectedFile = (event.target as HTMLInputElement).files?.[0];
  }


  validacaoResumo: Boolean = false
  validacaoDescricao:Boolean = false
  validacaoEmuladores:Boolean = false;
  validacaoConsole:Boolean = false;
  validacaoJogo:Boolean = false;
  validacaoArquivo:Boolean = false;

}
