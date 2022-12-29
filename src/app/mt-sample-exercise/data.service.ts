import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class DataService {
  private url = './assets/mock-data.json';
  constructor(private http: HttpClient) {}
  getFarms() {
    return this.http.get(this.url);
  }
  throwErr(){
    return "something went wrong"
  }
}
