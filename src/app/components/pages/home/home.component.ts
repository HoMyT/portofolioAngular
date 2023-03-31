import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesComponent } from '../services/services.component';

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
    constructor(private fb: FormBuilder){}

    ngOnInit(): void {
    this.data = [
        {
            title: "Développement d'applications web",
            describe : "Nous créons des applications web performantes en utilisant Angular, Node.js et TypeScript, ainsi qu'une base de données MongoDB ou MySQL pour stocker et récupérer les données"
        },
        {
            title: "Développement d'API REST",
            describe : "Nous pouvons concevoir et développer des API RESTful en utilisant Node.js et MongoDB ou MySQL pour vous aider à construire une application qui s'appuie sur une API"
        },
        {
            title: "Administration de base de données",
            describe : "Nous pouvons gérer et optimiser votre base de données relationnelle telle que MySQL ou MongoDB pour vous aider à atteindre vos objectifs commerciaux."
        },
        {
            title: "Développement de scripts de migration de données",
            describe : "Nous pouvons créer des scripts de migration de données pour faciliter le transfert de données d'une base de données à une autre."
        },
        {
            title: "Formation et mentorat",
            describe : "Nous pouvons vous aider à acquérir des compétences en utilisant MongoDB, MySQL, CLI ou phpMyAdmin, ainsi que d'autres technologies web pour vous permettre de réaliser vos projets."
        },
        {
            title: "Consultation technique",
            describe : "Nous pouvons vous fournir des conseils techniques pour vous aider à comprendre les technologies web modernes et à prendre des décisions éclairées pour votre projet de développement web."
        }
    ];
    this.dataService = [
        { title: "Création d'applications web" },
        { title: "Création d'API" },
        { title: "Intégration de fonctionnalités" },
        { title: "bases de données(Sql, NoSql)" },
        { title: "Sécurité des requêtes HTTP " },
        { title: "Mise à jour des applications" }
    ];
    this.sendMessage = this.fb.group({
        email : [null, Validators.required]
    });

    this.token = localStorage.getItem('token');
    console.log(this.token)

    // console.log(this.sendMessage.valid)
}
 ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // console.log(this.data)
    }
}
