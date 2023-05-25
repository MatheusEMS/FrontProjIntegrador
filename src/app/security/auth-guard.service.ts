import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../login/login.service";
import {Usuario} from "../login/usuario";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{


  constructor(private service: LoginService,private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const usuario_logado = this.service.adm_logado();
    if (!usuario_logado){
      if (state.url.endsWith('login')){
        return true;
      }else if(state.url.endsWith('CriarConta')){
        return true;
      }else if(state.url.endsWith('home')){
        return true;
      }
      else if(state.url.includes('jogos')){
        return true;
      }
      else if(state.url.includes('save')){
        return true;
      }
      else if(state.url.endsWith('enviar')){
        alert("Precisa estar logado para fazer upload")
        this.router.navigate(['login'])
        return false;
      }
      this.router.navigate(['home'])
    } else {
      if(state.url.endsWith('login')){
        this.router.navigate(['principal'])
      }
    }

  if(state.url.includes('requisic')){
      if(usuario_logado.admin == 'ADMIN'){
        return true;
      }else{
        this.router.navigate(['home'])
        return false;
      }
    }

    return true;
  }
}
