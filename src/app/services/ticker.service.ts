import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticker } from '../models/ticker.model';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class TickerService extends ResourceService<Ticker>{
  constructor(httpClient: HttpClient ) { 
    super(httpClient);
  }

  getResourceUrl(): string {
    return '/tickers';
  }
}