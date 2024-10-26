import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  get<T>(endpoint: string) {
    return this.http.get<T>(this.baseUrl + endpoint);
  }

  getBy<T>(endpoint: string,id:any) {
    return this.http.get<T>(this.baseUrl + endpoint + "/" + id);
  }

  add<T>(endpoint: string, body: any) {
    return this.http.post<T>(this.baseUrl + endpoint, body);
  }

  update<T>(endpoint: string, id:any, body: any) {
    return this.http.put<T>(this.baseUrl + endpoint + '/' + id, body);
  }

  delete<T>(endpoint: string, id: any) {
    return this.http.delete<T>(this.baseUrl + endpoint + '/' + id);
  }
}
