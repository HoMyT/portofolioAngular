import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/core/service/service-admin/admin-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {
    dataProject: Array<unknown>;
    dataEmail: Array<unknown>;
    constructor(private adms : AdminServiceService, private router: Router){}

    ngOnInit(): void{
        this.adms.adminGetAllProject().subscribe(data=>{ this.dataProject = data; }, err => { console.log(err) })

        this.adms.adminGetEmail().subscribe(data => { this.dataEmail= data }, err => { console.log(err) })
    }

    GoToProject(uuid: string){
        this.router.navigateByUrl(`admin/project-detail/${uuid}`)
    }
}
