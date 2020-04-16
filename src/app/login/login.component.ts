import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  login={
    email:"",
    password:""
  }
  user={
    userId: "",
    email: "",
    contactNo: "9",
    password: "",
    userName: ""
  }
  auth: boolean= false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(this.login.email,[
        Validators.required
      ]),
      'password': new FormControl(this.login.password, Validators.required)
    });    
  }
  onLogin() {
    this.login.email= this.loginForm.get('email').value;
    this.login.password=this.loginForm.get('password').value;
    // console.log(this.login);
    this.loginService.findAll(this.login)
    .then(() => this.router.navigate(['/userHomePage']),
          () => this.error(),)
  .catch(response => {console.log("login failed")
  });
  
  }
  error(){
   
    this.auth=true;
    console.log(this.auth);
  }
  closeAlert(){
    this.auth=false;
  }
  register(){
    this.router.navigate(['/signUp']);
  }
}
