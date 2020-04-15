import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';

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
    contactNo: ''
  };
  password;
  confirmPassword;
  showError = false;

  onSubmit() {
    if (this.password === this.confirmPassword) {
      this.user.password = this.password;
      this.signUpService.addUser(this.user)
      .then(response => {
          console.log("added user")
      })
      .catch(response => {
      });
    } else {
      this.registerMessage = 'Passwords do not match';
      this.showError = true;
    }
    console.log(this.user)
  }

  constructor(private signUpService: SignupService) { }

  ngOnInit() {
  }

}
