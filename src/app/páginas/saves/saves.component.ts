import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../login/usuario";
import {ActivatedRoute, Router} from "@angular/router";
import {Saves} from "./saves";
import {SavesService} from "./saves.service";

@Component({
  selector: 'app-saves',
  templateUrl: './saves.component.html',
  styleUrls: ['./saves.component.css']
})
export class SavesComponent implements OnInit{

  idJogoSelecionado: string | null | undefined;
  usuario : Usuario = this.service.usuario_logado();
  usuarioAtt : Usuario = new Usuario();
  saves: Saves[] = []
  mensagemDeNulo: boolean = false;
  console: string | null | undefined;
  nomeJogo: string | null | undefined;

  constructor(private router: Router,private service: SavesService,private route: ActivatedRoute) {
  }

  ngOnInit(): void{
    if(this.usuario != null){
      this.atualizar()
    }
    this.route.paramMap.subscribe(params => {
      this.idJogoSelecionado = params.get('id');
      this.nomeJogo = params.get('nome');
      this.console = params.get('console');
    });
      this.carregarSaves(this.idJogoSelecionado,this.console)

  }

  private carregarSaves(valor: string | null | undefined, console: string | null | undefined): void {
    this.service.lerSaves(valor,console).subscribe((dados) => {
      this.saves = dados;
      if (dados == null){
        this.mensagemDeNulo = true
      }else{
        this.mensagemDeNulo = false
      }
    });
  }

  private atualizar(): void {
    this.service.listar(this.usuario.id).subscribe((dados) => {
      this.usuarioAtt = dados;
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

  VoltarJogos(){
    this.router.navigate(['/jogos', this.console]);
  }

  LerSave(idSave: string | undefined){
    this.router.navigate(['/viewsave',idSave,this.nomeJogo,this.console]);
  }

}
