import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class UserLoggedInGuard{
    private loggedIn = false;
    isLoggedIn() {
        if (localStorage.getItem('userId') != null) {
            return true;
        } else {
            return false;
        }
    }
    canActivate() {
        return this.isLoggedIn();
    }
}





