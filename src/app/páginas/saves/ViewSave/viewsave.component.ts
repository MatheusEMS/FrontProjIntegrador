import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SavesService} from "../saves.service";
import {Usuario} from "../../../login/usuario";
import {ViewsaveService} from "./viewsave.service";
import {Saves} from "../saves";

@Component({
  selector: 'app-viewsave',
  templateUrl: './viewsave.component.html',
  styleUrls: ['./viewsave.component.css']
})
export class ViewsaveComponent implements OnInit{
  usuario : Usuario = this.service.usuario_logado();
  usuarioAtt : Usuario = new Usuario();
  saves: Saves = new Saves();
  mensagemDeNulo: boolean = false;
  console: string | null | undefined;
  nome: string | null | undefined;
  JogoSelecionado: string | null | undefined;
  idSave: string | null | undefined;

  constructor(private router: Router,private service: ViewsaveService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    if(this.usuario != null){
      this.atualizar()
    }

    this.route.paramMap.subscribe(params => {
      this.idSave = params.get('idsave');
      this.nome = params.get('nome');
      this.console = params.get('console');
    });
    this.PegarSave(this.idSave);
  }

  private atualizar(): void {
    this.service.listar(this.usuario.id).subscribe((dados) => {
      this.usuarioAtt = dados;
    });
  }

  PegarSave(Save: string | null | undefined){
    this.service.PegarSave(Save).subscribe((dados) => {
      this.saves = dados;
      if (dados == null){
        this.mensagemDeNulo = true
      }else{
        this.mensagemDeNulo = false
      }
    });
  }

  goToDestination(selectedValue: string) {
    this.router.navigate(['/jogos', selectedValue]);
  }

  logout(): void{
    this.service.logout();
    this.reloadCurrentPage()
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  VoltarSaves(idJogo: string | undefined){
    this.router.navigate(['/saves',idJogo,this.nome,this.console]);
  }
}
