import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { TokenInterceptorService } from 'src/app/core/token-interceptor/token-interceptor.service';
import { InterceptorReponseRequestService } from 'src/app/core/interceptor/interceptor-reponse-request.service';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { ProjectUserComponent } from '../project-user/project-user.component';
import { RouterAdminModule } from '../router-admin/router-admin.module';
import { GroupamaniaRouterModule } from '../router-admin/admin-router.module';



@NgModule({
    declarations: [
        AdminPageComponent,
        ProjectUserComponent,
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
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminPageComponent,
    ProjectUserComponent,
    GroupamaniaRouterModule
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
export class PageAdminModule { }
