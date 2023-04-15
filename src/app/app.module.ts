import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { SubscribeComponent } from './components/layouts/subscribe/subscribe.component';

import { HomeComponent } from './components/pages/home/home.component';


import { ServicesComponent } from './components/pages/services/services.component';

import { PartnerComponent } from './components/pages/partner/partner.component';
import { ContactComponent } from './components/pages/contact/contact.component';

import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';

import { BlogDetailsComponent } from './components/pages/project-details/project-details.component';

import { ErrorComponent } from './components/pages/error/error.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConnexionPageComponent } from './components/pages/connexion-page/connexion-page.component';
import { InterceptorReponseRequestService } from './core/interceptor/interceptor-reponse-request.service';
import { ProfilUserComponent } from './components/pages/profil-user/profil-user.component';
import { TokenInterceptorService } from './core/token-interceptor/token-interceptor.service';

import { HashLocationStrategy, LocationStrategy  } from '@angular/common';



@NgModule({
    declarations: [
    AppComponent,
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

    BlogDetailsComponent,

    ErrorComponent,
    ConnexionPageComponent,
    ProfilUserComponent
    ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorReponseRequestService,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
