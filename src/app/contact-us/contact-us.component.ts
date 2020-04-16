import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
alertBox: boolean =false;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.alertBox=true;
    window.alert("A ticket has been raised against your registered email address!")
  }
  closeAlert(){
    this.router.navigate(['/signUp']);
  }

}
