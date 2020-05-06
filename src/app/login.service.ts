import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url= environment.API_URL+"login";

  constructor(private http: HttpClient) { }
  findAll(login): Promise<any> {
    // console.log(login);
    return this.http.post(this.url, login)
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
    
    
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
