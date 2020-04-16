import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  name;
  isUserLoggedIn() {
    if (localStorage.getItem('userId') != null) {
     this.name= localStorage.getItem('userName')
      return true;
  } else {
      return false;
  }
  }

  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    this.router.navigate(['/signIn'])
  }

}
