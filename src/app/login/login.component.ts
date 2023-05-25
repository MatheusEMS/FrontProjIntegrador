import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {Usuario} from "./usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usuario: Usuario = new Usuario();

  constructor(private router: Router, private service: LoginService) {
  }
  ngOnInit(): void{

  }

  logar():void{
    console.log(this.usuario.email)
    if(!this.service.login(this.usuario).subscribe(u => {

      console.log('token: ' + u.token);
      this.service.setarAdmLogado(u);
      this.router.navigate(['/home']);

    }))
      this.erroCadastroLogin = true
  }


  erroCadastroLogin = false

}
