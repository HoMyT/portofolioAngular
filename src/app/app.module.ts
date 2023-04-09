import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { SubscribeComponent } from './components/layouts/subscribe/subscribe.component';

import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';

import { ServicesComponent } from './components/pages/services/services.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { PartnerComponent } from './components/pages/partner/partner.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { ErrorComponent } from './components/pages/error/error.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConnexionPageComponent } from './components/pages/connexion-page/connexion-page.component';
import { InterceptorReponseRequestService } from './core/interceptor/interceptor-reponse-request.service';


@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NavbarComponent,
    FooterComponent,
    SubscribeComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PricingComponent,
    PartnerComponent,
    ContactComponent,
    ShopComponent,
    CartComponent,
    CheckoutComponent,
    ServicesDetailsComponent,
    ProjectsComponent,
    ProjectsDetailsComponent,
    ProductsDetailsComponent,
    BlogGridComponent,
    BlogDetailsComponent,
    BlogRightSidebarComponent,
    ErrorComponent,
    ConnexionPageComponent
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
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
