import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { MessageService } from '../message.service';


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
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private messageService:MessageService
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
    this.loginService.findAll(this.login)
    .then((response) => {
      localStorage.setItem('userId',response.email);
      console.log(response.userName);
      localStorage.setItem('userName',response.name);
      this.messageService.add('You have logged in succesfully '+ response.userName+' !!');
      this.messageService.add('hi');
      this.router.navigate(['/home']);
    } ,
          () => this.error())
  .catch(response => {console.log(response)
  });
  
  }
  error(){
    window.alert("Invalid credentails eneterd. Try again!");
    this.loginForm.reset();
  }
  
  register(){
    this.router.navigate(['/signUp']);
  }
}
