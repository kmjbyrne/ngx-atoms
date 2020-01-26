import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token') || null;
    }

    purgeToken() {
        localStorage.clear();
    }
}
