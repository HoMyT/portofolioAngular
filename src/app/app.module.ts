import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { SubscribeComponent } from './components/layouts/subscribe/subscribe.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorReponseRequestService } from './core/interceptor/interceptor-reponse-request.service';
import { TokenInterceptorService } from './core/token-interceptor/token-interceptor.service';

import { HashLocationStrategy, LocationStrategy, PathLocationStrategy   } from '@angular/common';
import { PageModule } from './components/pages/page-component/page.module';




@NgModule({
    declarations: [
    AppComponent,
    PreloaderComponent,
    NavbarComponent,
    FooterComponent,
    SubscribeComponent,
    ],
    imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PageModule
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
        },
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
