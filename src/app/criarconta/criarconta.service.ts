import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "./usuario";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CriarcontaService {

  private readonly API_BACK = 'http://localhost:8080/CriarConta/';
  private readonly API_Login = 'http://localhost:8080/';
  private readonly USUARIO_LOGADO = 'usuario_logado'

  constructor(private http: HttpClient,private router: Router) { }

  criar(usuario: Usuario): Observable<Usuario>{
    return  this.http.post<Usuario>(this.API_BACK+'addConta', usuario)
    //this.router.navigate(['/home'])
  }

  login(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.API_Login+'login', usuario)
  }

  setarAdmLogado(usuario: Usuario): void{
    sessionStorage.setItem(this.USUARIO_LOGADO,JSON.stringify(usuario));
  }

}
