import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


@Injectable()
export class SignupService {
  private url ='signup';
  constructor(private http: Http) { }

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
