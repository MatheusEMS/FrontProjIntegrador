import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HomeService} from "../home/home.service";
import {ConfirmacaoService} from "./confirmacao.service";
import {Usuario} from "../../login/usuario";

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent implements OnInit{

  usuario : Usuario = this.service.usuario_logado();
  usuarioAtt : Usuario = new Usuario();

  constructor(private router: Router,private service: ConfirmacaoService) {
  }

  ngOnInit(): void{
      this.atualizar()
  }

  private atualizar(): void {
    this.service.listar(this.usuario.id).subscribe((dados) => {
      this.usuarioAtt = dados;
    });
  }

  logout(): void{
    this.service.logout();
    this.router.navigate(['/login'])
  }


}
