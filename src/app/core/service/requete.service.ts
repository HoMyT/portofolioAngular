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
    // Production
    // url: string = "https://get-evolutif.xyz/v2/";
    // Developpment
    url: string = "http://localhost:3000/v2/";

    ConnexionUser(email:string, password: string): Observable<any>{
        return this.http.post<any>(`${this.url}users/connexion`, {email, password})
        .pipe(
            catchError(this.handleError)
        )
    }
    InscriptionUser(email: string, password: string, name: string, last_name: string): Observable<unknown>{
        return this.http.post<unknown>(`${this.url}users/`, {email, password, name, last_name})
        .pipe(
            catchError(this.handleError)
        )
    }

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

    LogoEntreprise(photo: any): Observable<any>{
        return this.http.post<any>(`${this.url}logo-entreprise`, photo)
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

    getLogoEntreprise(): Observable<any[]>{
        return this.http.get<any>(`${this.url}users/logo-entreprise`)
        .pipe(
            catchError(this.handleError)
        )
    }

    getInfoProjectUser(): Observable<any[]>{
        return this.http.get<any>(`${this.url}users/info-project`)
        .pipe(
            catchError(this.handleError)
        )
    }

    getOneProject(uuid: string): Observable<any>{
        console.log(`${this.url}project-user/one-project/${uuid}`)
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
