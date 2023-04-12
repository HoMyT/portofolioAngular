import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequeteService } from 'src/app/core/service/requete.service';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent {
    connexionUser!: FormGroup;
    constructor(private fb: FormBuilder, private ras: RequeteService, private router: Router){}
    ngOnInit(): void {
        this.connexionUser = this.fb.group({
            email: [null, Validators.required],
            password : [null, Validators.required]
        });
    }
    connexion(){
        if (this.connexionUser.valid) {
            const objConnexion = { email: this.connexionUser.value.email, password: this.connexionUser.value.password };
            this.ras.ConnexionUser(this.connexionUser.value.email, this.connexionUser.value.password).subscribe(message => {
                console.log(message)
                let token = JSON.stringify(message.token)
                try {
                    localStorage.setItem('token', token)
                } catch (error) {
                    console.log(error)
                }
                this.router.navigateByUrl('/profil')
            }, err => {
                console.log(err)
            })
        }
    }
}
