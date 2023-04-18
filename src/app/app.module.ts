import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { SubscribeComponent } from './components/layouts/subscribe/subscribe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { PageModule } from './components/pages/page-component/page.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TokenInterceptorService } from './core/token-interceptor/token-interceptor.service';
import { InterceptorReponseRequestService } from './core/interceptor/interceptor-reponse-request.service';
import { NavBarAdminComponent } from './components/layouts/nav-bar-admin/nav-bar-admin.component';
import { PageAdminModule } from './components/pages/admin/page-admin-module/page-admin.module';



@NgModule({
    declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    SubscribeComponent,

    ],
    imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    PageModule,
    PageAdminModule,
    FontAwesomeModule,
    ],

    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
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
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
