import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AdminPageComponent } from '../admin-page/admin-page.component';
import { ProjectUserComponent } from '../project-user/project-user.component';

import { RouterOfAdmin } from '../router-admin/admin-router.module';
import { NavBarAdminComponent } from 'src/app/components/layouts/nav-bar-admin/nav-bar-admin.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
    declarations: [
        AdminPageComponent,
        ProjectUserComponent,
        NavBarAdminComponent
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        AdminPageComponent,
        ProjectUserComponent,
        NavBarAdminComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterOfAdmin,
        AppRoutingModule
    ]
})
export class PageAdminModule { }
