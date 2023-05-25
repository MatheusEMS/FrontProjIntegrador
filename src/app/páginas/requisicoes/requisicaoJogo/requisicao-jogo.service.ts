import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {Usuario} from "../../../login/usuario";
import {Observable} from "rxjs";
import {Saves} from "../../saves/saves";
import {SavesReq} from "../savesReq";

@Injectable({
  providedIn: 'root'
})
export class RequisicaoJogoService {

  private readonly USUARIO_LOGADO = 'usuario_logado'
  private readonly API_Req = 'http://localhost:8080/upload/';
  private readonly API_BACK = 'http://localhost:8080/conta/';

  constructor(private http: HttpClient,private router: Router) { }

  usuario_logado(): Usuario{
    return  JSON.parse(<string>sessionStorage.getItem(this.USUARIO_LOGADO));
  }
  logout():void{
    sessionStorage.removeItem(this.USUARIO_LOGADO);
    this.router.navigate(['/home'])
  }

  listar(id: string | undefined): Observable<Usuario>{
    return this.http.get<Usuario>(this.API_BACK+'pegarConta/'+id);
  }

  Deletar(id: string | undefined): Observable<Boolean>{
    return this.http.get<any>(this.API_Req+'deletar/'+id);
  }
  CadastrarJogo(nomeJogo:string | undefined,file: FormData | undefined,idSave :string | undefined): Observable<SavesReq>{
    const params = new HttpParams().set('nomeJogo', nomeJogo || '').set('idSave', idSave || '');
    return this.http.post<SavesReq>(this.API_Req+'CadastrarJogo', file, {params});
  }

}
