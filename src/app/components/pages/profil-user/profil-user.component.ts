import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { RequeteService } from 'src/app/core/service/requete.service';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.scss']
})
export class ProfilUserComponent {
    image: File;
    sendImg!: FormGroup;
    sendProject!: FormGroup;
    dataProjectUSer!: Array<unknown>
    noProject: boolean = false;
    logoEntreprise!: unknown;

    ngOnInit(): void{
        this.sendImg = this.fb.group({
            image: [null, Validators.required]
        });

        this.sendProject = this.fb.group({
            name_project: [null, Validators.required],
            descriptif_project: [null, Validators.required],
            type_project: [null, Validators.required]
        })

        this.ras.getInfoProjectUser().subscribe(data => {
            this.dataProjectUSer = data;
            console.log(this.dataProjectUSer)
            if (this.dataProjectUSer.length == 0) {
                this.noProject = true;
            }
            return this.dataProjectUSer
        }, err => {
            return err
        })

        this.ras.getLogoEntreprise().subscribe(data=> {
            console.log(data)
            if (data.length > 0) {
                this.logoEntreprise = data.map(obj => obj.pathImg);
            } else {
                this.logoEntreprise = "assets/img/blog-details/2.jpg";
            }
        }, err => {
            console.log(err)
        })
    }

    constructor(private ras: RequeteService, private fb: FormBuilder){}
    onSubmit(){
        const formData = new FormData();
        formData.append('logo-entreprise', this.image);
        this.ras.LogoEntreprise(formData).subscribe(res => { return res }, err => { return err });
    }
    createProject(){
        this.ras.createProjectUser(this.sendProject.value.name_project, this.sendProject.value.descriptif_project, this.sendProject.value.type_project).subscribe(res => { return res }, err => { return err })
    }
    getOneProject(uuid: string){
        console.log(uuid)
    }
    ngAfterViewInit(): void{
        // const auth = document.querySelector('#auth');
        // console.log(auth)
        // if (!auth && !localStorage.getItem('token')) {
        //     window.location.reload();
        //     console.log('non')
        // }

    }
}
