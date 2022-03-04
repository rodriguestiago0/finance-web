import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Broker } from '../models/broker.model';

const baseUrl = 'https://localhost:7197/api/brokers';
@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Broker[]> {
    return this.http.get<Broker[]>(baseUrl);
  }
  get(id: any): Observable<Broker> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  findByName(name: any): Observable<Broker[]> {
    return this.http.get<Broker[]>(`${baseUrl}?name=${name}`);
  }
}
