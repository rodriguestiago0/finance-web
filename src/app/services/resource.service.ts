import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export abstract class ResourceService<T> {
    private readonly APIUrl = environment.baseUrl + this.getResourceUrl();
    constructor(protected httpClient: HttpClient) {
    }

    abstract getResourceUrl(): string;
    
    toServerModel(entity: T): any {
        return entity;
    }

    fromServerModel(json: any): T {
        return json;
    }

    getList(page: number = 1, pageSize: number = 10, otherParameters: [string, string][] = []): Observable<T[]> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('pageSize', pageSize.toString());
        otherParameters.forEach(element => {
            params.set(element[0], element[1])
        });

        return this.httpClient.get<T[]>(`${this.APIUrl}?${params.toString()}`)
            .pipe(
                map((list) => list.map((item) => this.fromServerModel(item))),
                catchError(this.handleError)
            );
    }

    get(id: string | number): Observable<T> {
        return this.httpClient.get<T>(`${this.APIUrl}/${id}`)
            .pipe(
                map((json) => this.fromServerModel(json)),
                catchError(this.handleError)
            );
    }

    add(resource: T): Observable<any> {
        return this.httpClient.post(`${this.APIUrl}`, this.toServerModel(resource))
            .pipe(
                catchError(this.handleError)
            );
    }

    delete(id: string | number): Observable<any> {
        return this.httpClient.delete(`${this.APIUrl}/${id}`)
            .pipe(
                catchError(this.handleError)
            );
    }

    update(resource: T) {
        return this.httpClient.put(`${this.APIUrl}`, this.toServerModel(resource))
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        // Handle the HTTP error here
        return throwError(error);
    }
}
