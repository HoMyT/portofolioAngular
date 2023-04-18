import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServicesComponent } from 'src/app/components/pages/services/services.component';
@Injectable({
  providedIn: 'root'
})
export class RequeteService {

    constructor(private http: HttpClient) { }
    // Production
    // url: string = "https://get-evolutif.xyz/v2/";
    // Developpment
    url: string = "http://localhost:3000/v2/";


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

    LogoEntreprise(pathImg: any): Observable<any>{
        return this.http.post<any>(`${this.url}logo-entreprise`, pathImg)
        .pipe(
            catchError(this.handleError)
        )
    }

    getAllEmail(): Observable<any[]>{
        return this.http.get<any>(`${this.url}email/getEmail`)
        .pipe(
            catchError(this.handleError)
        )
    }

    createProjectUser(uuid: string, name_project: string, descriptif_project:string, type_project:string): Observable<unknown>{
        return this.http.post(`${this.url}project-user`, {uuid, name_project, descriptif_project, type_project})
        .pipe(
            catchError(this.handleError)
        )
    }


    getOneProject(uuid: string): Observable<any>{

        return this.http.get<any>(`${this.url}project-user/one-project/${uuid}`)
        .pipe(
            catchError(this.handleError)
        )
    }

    conversationProject(uuid_conversation: string, uuid_project:string, commentaire:string): Observable<unknown>{
        return this.http.post(`${this.url}project-user/post-commentaire-project`, {uuid_conversation, uuid_project, commentaire})
        .pipe(
            catchError(this.handleError)
        )
    }
    getConversationProject(uuid: string): Observable<any>{
        return this.http.get<any>(`${this.url}project-user/get-commentaire-project/${uuid}`)
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
