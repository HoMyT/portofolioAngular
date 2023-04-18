import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequeteService } from 'src/app/core/service/service/requete.service';

import { TableauInfoServiceService } from 'src/app/core/service/tableauInfoPage/tableau-info-service.service';

@Component({
  selector: 'app-home-four',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    data!: Array<unknown>
    dataService!: Array<unknown>
    sendMessage!: FormGroup;
    token!: string;
    connexion: boolean = false;

    constructor(private fb: FormBuilder, private ras: RequeteService, private tis: TableauInfoServiceService){}

    ngOnInit(): void {
    // history.pushState(null, null, '/');
    this.data = this.tis.servicePageHome;
    this.dataService = this.tis.tableauServicePageHome;

    this.sendMessage = this.fb.group({
        name: [null, Validators.required],
        email : [null, Validators.required],
        phone : [null, Validators.required],
        subject: [null, Validators.required],
        message: [null, Validators.required]
    });

}



    sendEmail(){
        this.ras.getMessageInfo(this.sendMessage.value.name, this.sendMessage.value.email, this.sendMessage.value.phone, this.sendMessage.value.subject, this.sendMessage.value.message).subscribe(data => {
            return data
        }, err => {
            return err
        })
    }
}
function next() {
    throw new Error('Function not implemented.');
}

