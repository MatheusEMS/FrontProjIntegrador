import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../../../login/usuario";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class EditarService {

  private readonly API_BACK = 'http://localhost:8080/conta/';
  private readonly USUARIO_LOGADO = 'usuario_logado'

  constructor(private http: HttpClient,private router: Router) { }

  editar(usuario: Usuario): Observable<boolean>{
    return  this.http.post<boolean>(this.API_BACK+'editar', usuario)
  }

  usuario_logado(): Usuario{
    return  JSON.parse(<string>sessionStorage.getItem(this.USUARIO_LOGADO));
  }

  listar(id: string | undefined): Observable<Usuario>{
    return this.http.get<Usuario>(this.API_BACK+'pegarConta/'+id);
  }
}
