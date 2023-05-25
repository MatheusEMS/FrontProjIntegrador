import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Usuario} from "../../login/usuario";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfirmacaoReqService {
  private readonly USUARIO_LOGADO = 'usuario_logado'
  private readonly API_BACK = 'http://localhost:8080/conta/';

  constructor(private http: HttpClient, private router: Router) {
  }

  usuario_logado(): Usuario {
    return JSON.parse(<string>sessionStorage.getItem(this.USUARIO_LOGADO));
  }

  logout(): void {
    sessionStorage.removeItem(this.USUARIO_LOGADO);
    this.router.navigate(['/home'])
  }

  listar(id: string | undefined): Observable<Usuario> {
    return this.http.get<Usuario>(this.API_BACK + 'pegarConta/' + id);
  }
}

