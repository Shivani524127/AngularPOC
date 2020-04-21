import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import {Router} from '@angular/router';
import { LoaderService } from '../loader/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '../loader/loader.interceptor';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent implements OnInit {
 registerMessage: any;
   user = {
    name: '',
    email: '',
    password: '',
    contactNo: ''};
  password;
  confirmPassword;
  showError = false;
  onSubmit() {
    if (this.password === this.confirmPassword) {
      this.user.password = this.password;
      this.signUpService .addUser(this.user)
      .then(response => {
        alert("User Registered!!")
        localStorage.setItem('userId',this.user.email);
        localStorage.setItem('userName',this.user.name)
        this.router.navigate(['/home']);})
        .catch(response => {
        if(response.status === 500) { 
        alert("EmailId already registered");
        document.getElementById('email').focus();
       }});
      } else {
      this.registerMessage = 'Passwords do not match';
      this.showError = true;}
    console.log(this.user)
  }

  constructor(private signUpService: SignupService, private router : Router) { }

  ngOnInit() {
  }

}
