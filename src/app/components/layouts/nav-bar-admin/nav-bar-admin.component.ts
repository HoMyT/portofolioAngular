import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.scss']
})
export class NavBarAdminComponent {
    verifToken : boolean;
    constructor(private router : Router) { }

    ngOnInit(): void {
    if (localStorage.getItem('token')) {
        this.verifToken = true;
    }else {
        this.verifToken = false
    }
}
    deconnexion(){
        if(localStorage.getItem('token')){
            localStorage.removeItem('token');
            this.router.navigateByUrl('connexion')
        } else {
            alert('Vous devez etre connectez pour effectuez cette actions');
        }
    }
    GoToAdmin(){
        this.router.navigateByUrl(`/admin/admin-page`)
    }
}
