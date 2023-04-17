import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
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

import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';




@NgModule({
    declarations: [
    HomeComponent,
    PartnerComponent,
    ContactComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    ProjectsComponent,
    BlogDetailsComponent,
    ErrorComponent,
    ConnexionPageComponent,
    ProfilUserComponent,
    NavbarComponent,
    ],
    imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
    ],
    exports: [
    HomeComponent,
    PartnerComponent,
    ContactComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    ProjectsComponent,
    BlogDetailsComponent,
    ErrorComponent,
    ConnexionPageComponent,
    ProfilUserComponent,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NavbarComponent,
    AppRoutingModule
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class PageModule { }
