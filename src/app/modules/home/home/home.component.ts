import { MessageService } from './../../../services/message/message.service';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/model/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messages: Message[];
  message: Message;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.messages = [];
    this.message = new Message();
  }

  response() {
    this.messages.push(this.messageService.getResponse());
  }

  send() {
    if (this.message.message.trim() !== '') {
      this.message.creator = 'User';
      this.message.class = 'card-message-right';
      this.messages.push(this.message);
      this.message = new Message();
      this.response();
    }
  }

}
