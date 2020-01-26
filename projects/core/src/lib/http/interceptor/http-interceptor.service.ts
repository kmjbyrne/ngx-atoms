import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(
        public auth: AuthService
    ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const contentType = 'application/json';
        request = request.clone({
            setHeaders: {
                'Content-Type': contentType,
            }
        });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log(event, 'test');
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log(error);
                this.reportError(error);
                console.log(error);
                return throwError(error);
            })
        );
    }

    reportError(error: any) {
        const response = {
            code: undefined,
            message: undefined,
            title: undefined
        };
        if (error.status === 0) {
            response.title = 'Connection Error';
            response.message = 'Unexpected server issue has occured. Contact support if issue persists.';
        } else if (error.status === 403) {
            response.title = 'Permissions Error';
            response.message = 'You do not have access to view this page. Please log in again.';
        }
        return response;
    }
}
