import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class InterceptorReponseRequestService implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.method === 'POST') {
            return next.handle(req)
                .pipe(
                    tap(event => {
                        // Traitez la réponse de l'API ici
                        if (event instanceof HttpResponse) {
                            alert(event.body.message);
                        }
                    })
                );
        }
        return next.handle(req);
    }
}
