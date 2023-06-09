import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequeteService } from 'src/app/core/service/service/requete.service';
import { UserServiceService } from 'src/app/core/service/service-user/user-service.service';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent {
    connexionUser!: FormGroup;
    inscriptionUser!: FormGroup;
    constructor(private fb: FormBuilder, private uss: UserServiceService, private router: Router){}
    ngOnInit(): void {
        this.connexionUser = this.fb.group({
            email: [null, Validators.required],
            password : [null, Validators.required]
        });
        this.inscriptionUser = this.fb.group({
            email: [null, Validators.required],
            password: [null, Validators.required],
            name: [null, Validators.required],
            last_name: [null, Validators.required],
            confirmPassword: [null, Validators.required]
        })
    }
    connexion(){
        if (this.connexionUser.valid) {
            this.uss.ConnexionUser(this.connexionUser.value.email, this.connexionUser.value.password).subscribe(message => {
                let token = JSON.stringify(message.token);
                try {
                    localStorage.setItem('token', token);
                } catch (error) {
                    alert(error);
                }
                if (message.admin == true) {
                    this.router.navigateByUrl('admin/admin-page');
                } else {
                    this.router.navigateByUrl('profil')
                }
            }, err => {
                alert(err)
            })
        }
    }
    inscription(){
        if (this.inscriptionUser.valid && this.inscriptionUser.value.password == this.inscriptionUser.value.confirmPassword) {
            this.uss.InscriptionUser(this.inscriptionUser.value.email, this.inscriptionUser.value.password,this.inscriptionUser.value.confirmPassword, this.inscriptionUser.value.name, this.inscriptionUser.value.last_name).subscribe(data=>{ return data }, err => { return err })
        }
    }
}
