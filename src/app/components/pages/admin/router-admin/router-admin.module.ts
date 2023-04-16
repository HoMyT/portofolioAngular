import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { ProjectUserComponent } from '../project-user/project-user.component';



const routes: Routes = [
    {path: 'admin-page', component: AdminPageComponent},
    {path: 'test', component: ProjectUserComponent}
]


@NgModule({
  declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RouterAdminModule { }
