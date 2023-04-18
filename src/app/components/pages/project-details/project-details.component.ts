import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequeteService } from 'src/app/core/service/service/requete.service';
import { UserServiceService } from 'src/app/core/service/service-user/user-service.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-blog-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
    dataProjectUSer: Array<unknown>;
    projectUser: Array<unknown>;
    commentProject: Array<unknown>;
    formCommentaireProject: FormGroup;
    constructor(private ras: RequeteService,private uss: UserServiceService, private router: Router, private fb: FormBuilder) { }

    ngOnInit(): void {

        this.formCommentaireProject = this.fb.group({
            commentaire: [null, [Validators.required, Validators.minLength(10)]]
        })

        this.uss.getInfoProjectUser().subscribe(data => { this.dataProjectUSer = data; }, err => { return err })
        //project
        this.ras.getOneProject(document.location.href.split('/')[5]).subscribe(data => { this.projectUser = data }, err => { alert(err) })
        // commentaire project
        this.ras.getConversationProject(document.location.href.split('/')[5]).subscribe(data => { this.commentProject = data; }, err => { alert(err) })
    }

    getOneProject(uuid){
        this.router.navigateByUrl(`projet-details/${uuid}`)
    }

    SendCommentaireProjet(){
        const uuid = uuidv4();
        this.ras.conversationProject(uuid, document.location.href.split('/')[5], this.formCommentaireProject.value.commentaire).subscribe(data=> {
            window.location.reload()
        }, err => {
            alert(err)
        })
    }
}
