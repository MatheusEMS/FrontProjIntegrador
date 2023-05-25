import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../login/usuario";
import {Router} from "@angular/router";
import {ContaService} from "./conta.service";

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit{
  usuario : Usuario = this.service.usuario_logado();
  usuarioAtt : Usuario = new Usuario();

  constructor(private router: Router, private service: ContaService) {
  }
  ngOnInit(): void{
    this.atualizar()
  }
  private atualizar(): void {
    this.service.listar(this.usuario.id).subscribe((dados) => {
      this.usuarioAtt = dados;
    });
  }




}
