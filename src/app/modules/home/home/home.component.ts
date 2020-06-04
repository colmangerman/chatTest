import { MessageService } from './../../../services/message/message.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from 'src/app/model/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messages: Message[];
  message: Message;
  @ViewChild('input') inputElement: ElementRef;

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
    this.messageService.getResponse().subscribe(
      message => {
        console.log(message);
        this.messages.push(message);
        this.inputElement.nativeElement.focus();
      }
    );

  }

  send() {
    if (this.message.Body.trim() !== '') {
      this.message.Creator = 'User';
      this.messages.push(this.message);
      this.message = new Message();
      this.response();
    }
  }

}
