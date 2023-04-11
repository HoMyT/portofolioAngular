import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
        if (!this.isAuthTokenValid(token)) {
        // Supprimer le jeton JWT invalide du stockage local
        localStorage.removeItem('token');
        return throwError('Authentication expired');
    }

        request = request.clone({
            setHeaders: {
            Authorization: `Bearer ${token}`
        }
        });
    }
    return next.handle(request).pipe(
        catchError(err => {
            if (err.status === 401) {
            // Supprimer le jeton JWT invalide du stockage local
            localStorage.removeItem('token');
            return throwError('Authentication required');
        }
        return throwError(err);
    })
    );
}

  // Méthode pour vérifier la validité du jeton JWT
    private isAuthTokenValid(token: string): boolean {
    if (!token) {
        return false;
    }

    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
        return false;
    }

    const payload = JSON.parse(atob(tokenParts[1]));
    const now = Math.floor(Date.now() / 1000);
        if (payload.exp < now) {
            return false;
        }

    return true;
    }
}
