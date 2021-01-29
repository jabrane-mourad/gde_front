import {HTTP_INTERCEPTORS, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {TokenStorageService} from '../_services/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      const token2 = 'Bearer ' + token;
      authReq = req.clone({headers: req.headers.append(TOKEN_HEADER_KEY, token2)});
      return next.handle(authReq);
    }
    return next.handle(authReq);
  }
}
export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];
