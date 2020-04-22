import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private url ='http://localhost:8080/'+'register';
  constructor(private http: HttpClient) { }

  addUser(user): Promise<any> {
    return this.http
      .post(this.url, user)
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
