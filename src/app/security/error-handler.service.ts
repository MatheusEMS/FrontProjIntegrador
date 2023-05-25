import {ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {LoginService} from "../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler{

  constructor(private service: LoginService) {
    super();
  }

  override handleError(error: HttpErrorResponse | any) {
    if (error instanceof HttpErrorResponse){
      switch (error.status){
        case 400:alert('Usuário ou senha Incorretas')
          break;
        case 500:
          alert('API deu Ruim')
          break;
        case 401:
          alert('Sessão expirou')
          this.service.logout();
          break;
      }
    }
  }
}
