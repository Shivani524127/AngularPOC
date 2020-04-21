import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  openMessage(){
    
    this.snackBar.open(this.messageService.messages[0], "Ok");

    }
  
}
