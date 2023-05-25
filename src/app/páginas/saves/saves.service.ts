import { Injectable } from '@angular/core';
import {Usuario} from "../../login/usuario";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Saves} from "./saves";

@Injectable({
  providedIn: 'root'
})
export class SavesService {

  private readonly USUARIO_LOGADO = 'usuario_logado'
  private readonly API_BACK = 'http://localhost:8080/conta/';
  private readonly API_Saves = 'http://localhost:8080/saves/';
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

  lerSaves(idJogo: string | null | undefined,console: string| null | undefined): Observable<Saves[]>{
    return this.http.get<Saves[]>(this.API_Saves+'LerSaves/'+idJogo+'/'+console);
  }
}
