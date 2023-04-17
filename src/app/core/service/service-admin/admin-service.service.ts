import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
   // Production
    // url: string = "https://get-evolutif.xyz/v2/admin";
    // Developpment
    url: string = "http://localhost:3000/v2/admin";
    constructor(private http: HttpClient) { }


    adminGetAllProject():Observable<any>{
        return this.http.get(`${this.url}/`)
        .pipe(
            catchError(this.handleError)
        )
    }

    adminGetOneProject(uuid: string):Observable<any>{
        return this.http.get(`${this.url}/one-project/${uuid}`)
        .pipe(
            catchError(this.handleError)
        )
    }

    adminGetEmail():Observable<any>{
        return this.http.get(`${this.url}/get-email/`)
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
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
        return throwError(() => new Error(error.error));
    }
}
