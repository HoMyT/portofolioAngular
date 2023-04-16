import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PartnerComponent } from '../partner/partner.component';
import { ContactComponent } from '../contact/contact.component';
import { ServicesDetailsComponent } from '../services-details/services-details.component';
import { ProjectsComponent } from '../projects/projects.component';

import { BlogDetailsComponent } from '../project-details/project-details.component';
import { ErrorComponent } from '../error/error.component';
import { ConnexionPageComponent } from '../connexion-page/connexion-page.component';
import { ProfilUserComponent } from '../profil-user/profil-user.component';
import { HomeComponent } from '../home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { ServicesComponent } from '../services/services.component';
import { TokenInterceptorService } from 'src/app/core/token-interceptor/token-interceptor.service';
import { InterceptorReponseRequestService } from 'src/app/core/interceptor/interceptor-reponse-request.service';
import { ProjectsDetailsComponent } from '../projects-details/projects-details.component';


@NgModule({
    declarations: [
    HomeComponent,
    PartnerComponent,
    ContactComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    ProjectsComponent,
    ProjectsDetailsComponent,
    BlogDetailsComponent,
    ErrorComponent,
    ConnexionPageComponent,
    ProfilUserComponent,
    ],
    imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ],
    exports: [
    HomeComponent,
    PartnerComponent,
    ContactComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    ProjectsComponent,
    ProjectsDetailsComponent,
    BlogDetailsComponent,
    ErrorComponent,
    ConnexionPageComponent,
    ProfilUserComponent,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorReponseRequestService,
            multi: true
        }
    ]
})
export class PageModule { }
