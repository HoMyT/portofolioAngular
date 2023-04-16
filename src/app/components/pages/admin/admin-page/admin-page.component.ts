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
    constructor(private adms : AdminServiceService, private router: Router){}

    ngOnInit(): void{
        this.adms.adminGetAllProject().subscribe(data=>{
            this.dataProject = data, console.log(this.dataProject)
        }, err => {
            console.log(err)
        })
    }
    test(){
        this.router.navigateByUrl('admin/test')
    }
    GoToProject(uuid: string){
        console.log(uuid)
    }
}
