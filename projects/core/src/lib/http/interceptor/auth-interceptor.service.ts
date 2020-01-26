import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptorService {

    constructor(private auth: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const token: string = this.auth.getToken() || '';
        const authRequest = request.clone({
            headers: request.headers.set('API_AUTHORIZATION', token)
        });
        return next.handle(authRequest);
    }
}
