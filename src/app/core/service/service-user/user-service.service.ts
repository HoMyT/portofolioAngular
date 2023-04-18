import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
    // Production
    // url: string = "https://get-evolutif.xyz/v2/";
    // Developpment
    url: string = "http://localhost:3000/v2/";
    constructor(private http: HttpClient) { }
    ConnexionUser(email:string, password: string): Observable<any>{
        return this.http.post<any>(`${this.url}users/connexion`, {email, password})
        .pipe(
            catchError(this.handleError)
        )
    }
    InscriptionUser(email: string, password: string, confirmPassword: string, name: string, last_name: string): Observable<unknown>{
        return this.http.post<unknown>(`${this.url}users/`, {email, password, confirmPassword, name, last_name})
        .pipe(
            catchError(this.handleError)
        )
    }

    getLogoEntreprise(): Observable<any[]>{
        return this.http.get<any>(`${this.url}users/logo-entreprise`)
        .pipe(
            catchError(this.handleError)
        )
    }

    getInfoProjectUser(): Observable<any[]>{
        return this.http.get<any>(`${this.url}users/info-project/`)
        .pipe(
            catchError(this.handleError)
        )
    }

    private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.message);
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
        `Backend returned code ${error.message}, body was: `, error.message);
    }
    // Return an observable with a user-facing error message.
        return throwError(() => new Error(error.message));
    }
}


