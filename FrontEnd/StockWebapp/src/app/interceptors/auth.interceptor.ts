/**
    Because interceptors are (optional) dependencies of the HttpClient service, 
    you must provide them in the same injector (or a parent of the injector) that provides HttpClient. 
    ** Interceptors provided after DI creates the HttpClient are ignored.
 */
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, 
        next: HttpHandler): Observable<HttpEvent<any>> {

        const accessToken = sessionStorage.getItem('access_token');

        if (accessToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization", accessToken)
            });

            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
    
}