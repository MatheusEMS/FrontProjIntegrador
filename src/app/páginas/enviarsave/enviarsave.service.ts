import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {Usuario} from "../../login/usuario";
import {Observable} from "rxjs";
import {jogos} from "../jogos/jogos";
import {Saves} from "../saves/saves";


@Injectable({
  providedIn: 'root'
})
export class EnviarsaveService {

  private readonly USUARIO_LOGADO = 'usuario_logado'
  private readonly API_BACK = 'http://localhost:8080/upload/';
  private readonly API_Conta = 'http://localhost:8080/conta/';
  private readonly API_Jogos = 'http://localhost:8080/jogos/';

  constructor(private http: HttpClient,private router: Router) { }

  usuario_logado(): Usuario{
    return  JSON.parse(<string>sessionStorage.getItem(this.USUARIO_LOGADO));
  }
  logout():void{
    sessionStorage.removeItem(this.USUARIO_LOGADO);
    this.router.navigate(['/home'])
  }

  listar(id: string | undefined): Observable<Usuario>{
    return this.http.get<Usuario>(this.API_Conta+'pegarConta/'+id);
  }

  lerJogos(nomeConsole: string): Observable<jogos[]>{
    return this.http.get<jogos[]>(this.API_Jogos+'Lerjogos/'+nomeConsole);
  }
  cadastrarSave(save: Saves,idConsole: string | undefined, idJogo: string | undefined, idUsuario: string | undefined): Observable<any>{
    const params = new HttpParams().set('idConsole', idConsole || '').set('idJogo', idJogo || '').set('idUsuario', idUsuario || '');
    return this.http.post<Saves>(this.API_BACK+'CadastrarSave', save, {params});
  }

  SalvarImagem(file: FormData | undefined):Observable<Boolean>{
    return this.http.post<any>(this.API_BACK+'CadastrarImagem',file);
  }
}
