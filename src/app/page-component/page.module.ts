import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/pages/home/home.component';

import { ServicesComponent } from '../components/pages/services/services.component';
import { PartnerComponent } from '../components/pages/partner/partner.component';
import { ContactComponent } from '../components/pages/contact/contact.component';

import { ServicesDetailsComponent } from '../components/pages/services-details/services-details.component';
import { ProjectsComponent } from '../components/pages/projects/projects.component';
import { ProjectsDetailsComponent } from '../components/pages/projects-details/projects-details.component';
import { ProductsDetailsComponent } from '../components/pages/products-details/products-details.component';
import { BlogDetailsComponent } from '../components/pages/project-details/project-details.component';
import { ErrorComponent } from '../components/pages/error/error.component';
import { ConnexionPageComponent } from '../components/pages/connexion-page/connexion-page.component';
import { ProfilUserComponent } from '../components/pages/profil-user/profil-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { PreloaderComponent } from '../components/layouts/preloader/preloader.component';
import { NavbarComponent } from '../components/layouts/navbar/navbar.component';
import { FooterComponent } from '../components/layouts/footer/footer.component';
import { SubscribeComponent } from '../components/layouts/subscribe/subscribe.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    PartnerComponent,
    ContactComponent,
    ServicesDetailsComponent,
    ProjectsComponent,
    ProjectsDetailsComponent,
    ProductsDetailsComponent,
    BlogDetailsComponent,
    ErrorComponent,
    ConnexionPageComponent,
    ProfilUserComponent,
    PreloaderComponent,
    NavbarComponent,
    FooterComponent,
    SubscribeComponent,
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
        PreloaderComponent,
    NavbarComponent,
    FooterComponent,
    SubscribeComponent,
    HomeComponent,
    ServicesComponent,
    PartnerComponent,
    ContactComponent,
    ServicesDetailsComponent,
    ProjectsComponent,
    ProjectsDetailsComponent,
    ProductsDetailsComponent,
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
