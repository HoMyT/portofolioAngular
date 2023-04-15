import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



import { PartnerComponent } from '../partner/partner.component';
import { ContactComponent } from '../contact/contact.component';

import { ServicesDetailsComponent } from '../services-details/services-details.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectsDetailsComponent } from '../projects-details/projects-details.component';

import { BlogDetailsComponent } from '../project-details/project-details.component';

import { ErrorComponent } from '../error/error.component';
import { ConnexionPageComponent } from '../connexion-page/connexion-page.component';
import { ProfilUserComponent } from '../profil-user/profil-user.component';
import { HomeComponent } from '../home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { TableauInfoServiceService } from 'src/app/core/service/tableauInfoPage/tableau-info-service.service';
import { ServicesComponent } from '../services/services.component';
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
    ProfilUserComponent
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
    ReactiveFormsModule
  ]
})
export class PageModule { }
