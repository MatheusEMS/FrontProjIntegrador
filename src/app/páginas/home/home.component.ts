import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HomeService} from "./home.service";
import {Usuario} from "../../login/usuario";
import {Saves} from "../saves/saves";
import {jogos} from "../jogos/jogos";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  usuario : Usuario = this.service.usuario_logado();
  usuarioAtt : Usuario = new Usuario();
  saves: Saves[] = []
  mensagemDeNulo: boolean = false;
  console: string | undefined;
  nomeJogo: jogos = new jogos();

  constructor(private router: Router,private service: HomeService) {
  }

  ngOnInit(): void{
    if(this.usuario != null){
      this.atualizar()
    }
    this.carregarSaves()
  }

  private atualizar(): void {
    this.service.listar(this.usuario.id).subscribe((dados) => {
      this.usuarioAtt = dados;
    });
  }

  private carregarSaves(): void {
    this.service.lerSaves().subscribe((dados) => {
      this.saves = dados;
      if (dados == null){
        this.mensagemDeNulo = true
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

  goToDestination(selectedValue: string) {
    this.router.navigate(['/jogos', selectedValue]);
  }

  LerSave(idSave: string | undefined,idConsole: string | undefined,idJogo: string | undefined){


    if(idConsole == '1'){
      this.console = 'Nintendinho'
    }else if (idConsole == '2'){
      this.console = 'Super Nintendo'
    }else if (idConsole == '3'){
      this.console = 'Mega Drive'
    }else if (idConsole == '4'){
      this.console = 'Playstation'
    }else if (idConsole == '5'){
      this.console = 'Nintendo 64'
    }else if (idConsole == '6'){
      this.console = 'Playstation 2'
    }else if (idConsole == '7'){
      this.console = 'Gamecube'
    }else if (idConsole == '8'){
      this.console = 'Xbox'
    }else if (idConsole == '9'){
      this.console = 'Outros'
    }


    this.service.pegarNomeJogo(idJogo).subscribe((dados) => {
      this.nomeJogo = dados;
      if(this.nomeJogo != undefined){
        this.router.navigate(['/viewsave',idSave,this.nomeJogo.nomeJogo,this.console]);
      }
    });


  }


}
