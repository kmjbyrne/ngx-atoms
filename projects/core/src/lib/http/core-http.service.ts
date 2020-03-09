import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Resource } from '../models/resource';
import { GetResponse } from '../interface/get-response';

export class CoreHttpResourceService<T extends any> {
    private queryString = '';
    constructor(private http: any, public url: string, public endpoint: string) {}

    private getEndpoint(id?: string | number, query?: string) {
        if (id === undefined) {
            return `${this.url}/${this.endpoint}${this.queryString}`;
        }
        return `${this.url}/${this.endpoint}/${id}${this.queryString}`;
    }

    private makeQueryString(expression: string): string {
        if (expression.startsWith('?')) {
            return expression;
        }
        return '?' + expression;
    }

    public setQueryString(query: string): void {
        this.queryString = this.makeQueryString(query);
    }

    public query(query: string): Observable<GetResponse> {
        this.setQueryString(query);
        return this.http.get(this.getEndpoint()).pipe(map((resp: any) => resp as GetResponse));
    }

    public g(resourceId?: string): Observable<GetResponse> {
        return this.http.get(this.getEndpoint(resourceId)).pipe(map((resp: any) => resp as GetResponse));
    }

    public get(resourceId?: string | number, query?: string): Observable<GetResponse> {
        // if (query) {
        //     this.setQueryString(query);
        // }
        return this.http.get(this.getEndpoint(resourceId)).pipe(map((resp: any) => resp as GetResponse));
    }

    public post(data: T): any {
        return this.http.post(this.getEndpoint(), data).pipe(map((resp: any) => resp as any));
    }

    public put(id: string, data: T): any {
        return this.http.put(this.getEndpoint(id), data).pipe(map((resp: any) => resp as any));
    }

    public delete(id: string): any {
        return this.http.delete(this.getEndpoint(id)).pipe(map((resp: any) => resp as any));
    }
}
