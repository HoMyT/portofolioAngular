import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    token: boolean
    constructor() { }

    ngOnInit(): void {
    if (localStorage.getItem('token')) {
        this.token = true;
    }
}
    deconnexion(){
        localStorage.removeItem('token');
        window.location.reload();
    }
}
