import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    connected!: boolean;

    ngOnInit(): void{
        this.sendImg = this.fb.group({
            image: [null, Validators.required]
        });

        this.sendProject = this.fb.group({
            name_project: [null, Validators.required],
            descriptif_project: [null, Validators.required],
            type_project: [null, Validators.required]
        })

        if (localStorage.getItem('token')) {
            this.connected = true
        } else {
            this.connected = false
        }
        this.ras.getInfoUser().subscribe(data => {
            console.log(data)
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
}
