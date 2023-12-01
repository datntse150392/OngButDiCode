import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { User } from 'src/app/models/UserModel';
import { environment } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })
export class UserAPIService {
  constructor(private httpClient: HttpClient) {}

  isCheckAccount(email: any): Observable<any> {
    const body = { email };
    return this.httpClient
      .post(`${environment.apiUrl}auth/isCheckAccount`, body)
      .pipe(catchError(this.handleError<any>()));
  }

  getUser(userId: any): Observable<User> {
    const body = { userId };
    return this.httpClient
      .post(`${environment.apiUrl}user/getUser`, body)
      .pipe(catchError(this.handleError<any>()));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}