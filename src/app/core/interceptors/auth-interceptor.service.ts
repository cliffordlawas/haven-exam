import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    /** If user logs on session, we will pull the data auth here  */
    const USER_AUTH = ``;
    const API_KEY = `Bearer `;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${API_KEY}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    const cloneReq = httpRequest.clone({headers});

    return next.handle(cloneReq);
  }
}
