import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod'


@Injectable()
export class ProductListService {
  private url = environment.API_URL+'hi';
  constructor(private http: HttpClient) { }

  addProduct(): Promise<any> {
    return this.http
      .get(this.url,  {responseType:'text'})
      .toPromise()
      .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
      .catch(this.handleError);
  }

  shareProduct(): Promise<any> {
    return this.http
      .get(this.url,  {responseType:'text'})
      .toPromise()
      .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
