import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { UserContact } from '../model/UserContact';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  postContact(user: UserContact): Observable<any> {
    return this.httpClient.post(environment.api_url, user)
      .pipe(tap(data => alert('Success')),
        catchError(error => {
          return throwError(error); 
        }));
  }

  getContacts(): Observable<any> {
    return this.httpClient.get(environment.api_url)
      .pipe(catchError(error => {
          return throwError(error); 
        }));
  }
}
