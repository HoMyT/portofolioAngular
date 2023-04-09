import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequeteService } from 'src/app/core/service/requete.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

    constructor(private fb: FormBuilder, private ras: RequeteService) { }
    sendMessage!: FormGroup;
    ngOnInit(): void {
        this.sendMessage = this.fb.group({
            email : [null, Validators.required],
        });
    }

    addUserNewLester(){
        if(this.sendMessage.valid){
            this.ras.AddUserNEwLester(this.sendMessage.value.email).subscribe(data=> {
                return data
            }, err => {
               console.log(err)
            })
        }
    }
}
