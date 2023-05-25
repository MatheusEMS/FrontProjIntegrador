import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HomeService} from "../home/home.service";
import {Usuario} from "../../login/usuario";
import {JogosService} from "./jogos.service";
import {jogos} from "./jogos";

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit{

  ConsoleSelecionado: string | null | undefined;
  usuario : Usuario = this.service.usuario_logado();
  usuarioAtt : Usuario = new Usuario();
  jogos: jogos[] = []
  mensagemDeNulo: boolean = false;

  constructor(private router: Router,private service: JogosService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if(this.usuario != null){
      this.atualizarUser()
    }
      this.route.paramMap.subscribe(params => {
        this.ConsoleSelecionado = params.get('selectedValue');
      });
    if (this.ConsoleSelecionado != null) {
      this.carregar(this.ConsoleSelecionado)
    }
  }

  private atualizarUser(): void {
    this.service.listarUser(this.usuario.id).subscribe((dados) => {
      this.usuarioAtt = dados;
    });
  }

  private carregar(valor: string): void {
    this.service.lerJogos(valor).subscribe((dados) => {

      this.jogos = dados;
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

  AttJogo(valor: string){
    this.router.navigate(['/jogos', valor]);
    this.service.lerJogos(valor).subscribe((dados) => {
      this.jogos = dados;
      if (dados == null){
        this.mensagemDeNulo = true
      }else{
        this.mensagemDeNulo = false
      }
    });
  }

  SavesdoJogo(id: string | undefined,nome: string | undefined,){
    this.router.navigate(['/saves',id,nome,this.ConsoleSelecionado]);
  }

}
