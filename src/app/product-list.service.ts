import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


@Injectable({
    providedIn: 'root'
  })
export class ProductListService {
  private url ='http://localhost:8080/hi';
  constructor(private http: Http) { }

  addProduct(): Promise<any> {
    return this.http
      .get(this.url)
      .toPromise()
      .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
      .catch(this.handleError);
  }

  shareProduct(): Promise<any> {
    return this.http
      .get(this.url)
      .toPromise()
      .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
