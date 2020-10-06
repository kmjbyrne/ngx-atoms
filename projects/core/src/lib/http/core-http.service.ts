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

    private parseToQs(payload: any) {
        let querystring = '?';
        Object.keys(payload).forEach((key) => {
            querystring += `${key}=${payload[key]}&`;
        });
        querystring = querystring.slice(0, -1);
        return querystring;
    }

    public setQueryString(query: string): void {
        if (typeof query === 'string') {
            this.queryString = this.makeQueryString(query);
        } else {
            this.queryString = this.parseToQs(query);
        }
    }

    public query(query: string): Observable<GetResponse> {
        this.setQueryString(query);
        return this.http.get(this.getEndpoint()).pipe(map((resp: any) => resp as GetResponse));
    }

    public g(resourceId?: string | number): Observable<GetResponse> {
        return this.http.get(this.getEndpoint(resourceId)).pipe(map((resp: any) => resp as GetResponse));
    }

    public _get(resourceId?: string | number, query?: any): Observable<GetResponse> {
        let request = this.getEndpoint(resourceId);
        if (query) {
            request += this.parseToQs(query);
        }
        return this.http.get(request).pipe(map((resp: any) => resp as GetResponse));
    }

    public get(resourceId?: any, query?: any): Observable<GetResponse> {
        let request = this.getEndpoint(resourceId);
        if (query) {
            request += this.parseToQs(query);
        }
        if (query === undefined) {
            this.queryString = '';
        }
        return this.http.get(this.getEndpoint(resourceId)).pipe(map((resp: any) => resp as GetResponse));
    }

    public one(resourceId: string | number, query?: any): Observable<GetResponse> {
        let qs = '';
        if (typeof query === 'string') {
            qs = this.makeQueryString(query);
        } else {
            qs = this.parseToQs(query);
        }
        this.queryString = '';
        let request = this.getEndpoint(resourceId);
        if (qs) {
            request += qs;
        }
        return this.http.get(request).pipe(map((resp: any) => resp as GetResponse));
    }

    public post(data: T): any {
        return this.http.post(this.getEndpoint(), data).pipe(map((resp: any) => resp as any));
    }

    public put(id?: string | number, data?: T): any {
        return this.http.put(this.getEndpoint(id), data).pipe(map((resp: any) => resp as any));
    }

    public _put(endpoint: string, data?: T): any {
        return this.http.put(endpoint, data).pipe(map((resp: any) => resp as any));
    }

    public delete(id: string | number): any {
        return this.http.delete(this.getEndpoint(id)).pipe(map((resp: any) => resp as any));
    }
}
