import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  contact={
    name:"",
    subject: "",
  }
  constructor(private router: Router) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(this.contact.name, Validators.required),
      'subject': new FormControl(this.contact.subject, Validators.required)
    });    
   }
    onSubmit(){
    window.alert("A ticket has been raised against your registered email address!");
    this.contactForm.reset();
  }
  

}
