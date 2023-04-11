import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequeteService } from 'src/app/core/service/requete.service';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent {
    connexionUser!: FormGroup;
    connected!: boolean;
    constructor(private fb: FormBuilder, private ras: RequeteService){}
    ngOnInit(): void {
        this.connexionUser = this.fb.group({
            email: [null, Validators.required],
            password : [null, Validators.required]
        });
    }
    connexion(){
        if (this.connexionUser.valid) {
            const objConnexion = { email: this.connexionUser.value.email, password: this.connexionUser.value.password };
            console.log(objConnexion)
            this.ras.ConnexionUser(this.connexionUser.value.email, this.connexionUser.value.password).subscribe(message => {
                console.log(message)
                let token = JSON.stringify(message.token)
                try {
                    localStorage.setItem('token', token)
                    this.connected = true;
                } catch (error) {
                    this.connected = false;
                    console.log(error)
                }
                window.location.reload();
            }, err => {
                console.log(err)
            })
        }
    }
}
