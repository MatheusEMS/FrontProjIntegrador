import {Component, OnInit, ViewChild} from '@angular/core';
import {Usuario} from "../../../login/usuario";
import {Router} from "@angular/router";
import {ContaService} from "../conta.service";
import {EditarService} from "./editar.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  usuario : Usuario = this.service.usuario_logado();
  usuarioAtt : Usuario = new Usuario();

  @ViewChild('editarForm') form: NgForm | undefined;

  constructor(private router: Router, private service: EditarService) {
  }
  ngOnInit(): void{
    this.atualizar()
    this.iniciarEdit()
  }

  private atualizar(): void {
    this.service.listar(this.usuario.id).subscribe((dados) => {
      this.usuarioAtt = dados;
    });
  }

  iniciarEdit(): void{
      this.form?.setValue({
        nometime: this.usuarioAtt?.nome,
      });
  }

  editarConta(): void{
    this.service.editar(this.usuarioAtt).subscribe((teste)=>{
      if(teste == true) {
        this.router.navigate(['/conta']);
      }else {
        this.validacao = true
      }
    })
  }

  validacao = false
}
