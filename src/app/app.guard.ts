import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class UserLoggedInGuard {
    constructor(private router: Router) {
    }
    private loggedIn = false;
    isLoggedIn() {
        if (localStorage.getItem('userId') != null) {
            return true;
        } else {
            this.router.navigate(['/signUp']);
        }
    }
    canActivate() {
        return this.isLoggedIn();
    }
}





