import { Injectable } from '@angular/core';
import { ServicesComponent } from '../../components/pages/services/services.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RequeteService {

    constructor(private http: HttpClient) { }
    url: string = "http://localhost:3000/";
    getMessageInfo(name:string, email:string, phone: number, subject:string, message:string): Observable<ServicesComponent>{
        return this.http.post<ServicesComponent>(`${this.url}email`, {name, email, phone, subject, message})
        .pipe(
            catchError(this.handleError)
        )
    }

    AddUserNEwLester(email:string): Observable<ServicesComponent>{
        return this.http.post<ServicesComponent>(`${this.url}email/addUserNewLester`, {email})
        .pipe(
            catchError(this.handleError)
        )
    }


private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
        `Backend returned code ${error.status}, body was: `, error.error.message);
    }
    // Return an observable with a user-facing error message.
        return throwError(() => new Error(error.error.message));
    }
}
