import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    constructor(private router : Router) { }

    ngOnInit(): void {

}
    deconnexion(){
        if(localStorage.getItem('token')){
            localStorage.removeItem('token');
            this.router.navigateByUrl('connexion')
        } else {
            alert('Vous devez etre connectez pour effectuez cette actions');
        }

    }
    GoToProfil(){
        this.router.navigateByUrl(`/profil/`)
    }
}
