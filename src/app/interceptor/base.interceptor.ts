import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    // const userToken = 'secure-user-token';
    // const modifiedReq = request.clone({ 
    //   headers: request.headers.set('Authorization', `Bearer ${userToken}`),
    // });

    

    const modifiedReq = request.clone({
      headers: request.headers.set("Access-Control-Allow-Origin", "*"),
    });

    const authReq = request.clone({
      headers: request.headers
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
      // .set('header3', 'header 3 value')
    });
    console.log("authReq", authReq)
    return next.handle(authReq);
  }
}
