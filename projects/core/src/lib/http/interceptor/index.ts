import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestInterceptor } from './http-interceptor.service';
import { AuthInterceptorService } from './auth-interceptor.service';

export const HttpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    }
];
