import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginService} from "../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class JwtinterceptorService implements HttpInterceptor{

  constructor(private service: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const adm_logado = this.service.adm_logado()


    if(adm_logado ){
      const req_auth = req.clone(
        {setHeaders:{'Authorization':'Bearer '+adm_logado.token}}
      );
      return next.handle(req_auth);
    }else {
      return next.handle(req);
    }

  }
}
