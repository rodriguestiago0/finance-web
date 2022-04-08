import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Broker } from '../models/broker.model';
import { environment } from '../../environments/environment';
import { ResourceService } from './resource.service';

@Injectable({
    providedIn: 'root'
})
export class BrokerService extends ResourceService<Broker>{
    constructor(httpClient: HttpClient) {
        super(httpClient);
    }

    getResourceUrl(): string {
        return '/brokers';
    }
}