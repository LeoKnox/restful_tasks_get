import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {}
  
  getTasks(){
    console.log('inside http service')
    return this._http.get('/tasks');
  }

  getOne(){
    console.log('whatever')
    return this._http.get('/tasks/5c42157463c8f267fada793c')
  }
}
