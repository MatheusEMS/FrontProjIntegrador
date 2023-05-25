import {Component, OnInit} from '@angular/core';
import {CriarcontaService} from "./criarconta.service";
import {Router} from "@angular/router";
import {Usuario} from "./usuario";

@Component({
  selector: 'app-criarconta',
  templateUrl: './criarconta.component.html',
  styleUrls: ['./criarconta.component.css']
})
export class CriarcontaComponent implements OnInit{

  usuario : Usuario = new Usuario();
  confirmaSenha: string | undefined;

  constructor(private router: Router, private service: CriarcontaService) {
  }
  ngOnInit(): void{

  }


  gravarUsuario(): void{
    //alert('Usuário cadastrado: ' + this.usuario.nome+' '+ this.usuario.email+ ' '+ this.usuario.senha)
    if (this.usuario.nome == null){
      this.validacaoNome = true
    }else {
      this.validacaoNome = false
    }
    if (this.usuario.email == null){
      this.validacaoEmail = true
    }else{
      this.validacaoEmail = false
    }
    if (this.usuario.senha == null){
      this.validacaoSenha = true
    }else{
      this.validacaoSenha = false
    }
    if(this.confirmaSenha == this.usuario.senha){
      this.validacaoConfirmaSenha = false
      this.service.criar(this.usuario).subscribe((usuario)=>{
        if (usuario.nome == null){
          this.validacaoNome = true
        }else {
          this.validacaoNome = false
        }
        if (usuario.email == null){
          this.validacaoEmail = true
        }else {
          this.validacaoEmail = false
        }
        if (usuario.senha == null){
          this.validacaoSenha = true
        }else {
          this.validacaoSenha = false
        }
        if(usuario.nome != null && usuario.email != null && usuario.senha != null){
          this.service.login(this.usuario).subscribe(u=>{
            console.log('token: '+u.token);
            this.service.setarAdmLogado(u);
            alert('Cadastrado')
            this.Voltar()
          })

        }
      })
    }else {
      this.validacaoConfirmaSenha = true
    }


  }
  validacaoNome = false
  validacaoEmail = false
  validacaoSenha = false
  validacaoConfirmaSenha = false


  Voltar():void{
    this.router.navigate(['/home']);
  }
}
