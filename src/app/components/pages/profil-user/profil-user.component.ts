import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { RequeteService } from 'src/app/core/service/requete.service';
import { Router } from '@angular/router';

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
    noProject: boolean ;
    logoEntreprise!: unknown;
    images: File;

    constructor(private ras: RequeteService, private fb: FormBuilder, private router: Router){}

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
            if (this.dataProjectUSer.length === 0) {
                this.noProject = true;
                return this.noProject
            }
            return this.dataProjectUSer;
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

    fileChoosen(event: any) {
        if (event.target.value) {
        const file = event.target.files[0];
        this.image = file
        }
    }

    onSubmit(){
        const formData = new FormData();
        formData.append('img-entreprise', this.image);
        this.ras.LogoEntreprise(formData).subscribe(res => { return res }, err => { return err });
    }

    createProject(){
        const uuidProject = uuidv4();
        this.ras.createProjectUser(uuidProject, this.sendProject.value.name_project, this.sendProject.value.descriptif_project, this.sendProject.value.type_project).subscribe(res => { return res }, err => { return err })
        this.dataProjectUSer.push({uuid_project: uuidProject, name_project: this.sendProject.value.name_project, descriptif_project: this.sendProject.value.descriptif_project, type_project: this.sendProject.value.type_project })
    }

    getOneProject(uuid: string){
        this.router.navigateByUrl(`projet-details/${uuid}`)
    }
}
