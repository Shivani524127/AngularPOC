import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
    });
  }
  onLogin() {
    this.login.email= this.loginForm.get('email').value;
    this.login.password=this.loginForm.get('password').value;
    // console.log(this.login);
    this.loginService.findAll(this.login)
    .then(() => {
      localStorage.setItem('userId',this.login.email);
      localStorage.setItem('userName',this.login.email)
      this.router.navigate(['/home'])
    } ,
          () => this.error())
  .catch(response => {console.log(response)
  });
  
  }
  error(){
    
  }

}
