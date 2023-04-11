import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
// import { AboutComponent } from './components/pages/about/about.component';

import { ContactComponent } from './components/pages/contact/contact.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { PartnerComponent } from './components/pages/partner/partner.component';
// import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ConnexionPageComponent } from './components/pages/connexion-page/connexion-page.component';
import { ProfilUserComponent } from './components/pages/profil-user/profil-user.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    // {path: 'about', component: AboutComponent},

    // {path: 'projects', component: ProjectsComponent},
    {path: 'projects-details', component: ProjectsDetailsComponent},
    {path: 'partner', component: PartnerComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'blog-grid', component: BlogGridComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'products-details', component: ProductsDetailsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'profil', component: ProfilUserComponent},
    {path: 'connexion', component: ConnexionPageComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
