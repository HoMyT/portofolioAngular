import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

// import { ContactComponent } from './components/pages/contact/contact.component';


import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ServicesComponent } from './components/pages/services/services.component';

import { PartnerComponent } from './components/pages/partner/partner.component';

import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';

import { BlogDetailsComponent } from './components/pages/project-details/project-details.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ConnexionPageComponent } from './components/pages/connexion-page/connexion-page.component';
import { ProfilUserComponent } from './components/pages/profil-user/profil-user.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'projects-details', component: ProjectsDetailsComponent},
    {path: 'partner', component: PartnerComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'projet-details/:id', component: BlogDetailsComponent},
    // {path: 'contact', component: ContactComponent},
    {path: 'profil', component: ProfilUserComponent},
    {path: 'connexion', component: ConnexionPageComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
