import { Random } from './../../helpers/random';
import { Message } from './../../model/message';
import { Injectable } from '@angular/core';
import { LevelEnum } from 'src/app/helpers/levelEnum';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getResponse(): Message {
    return this.selectResponse();
  }

  private selectResponse(): Message {
    const message = new Message();
    message.class = 'card card-message card-message-left';
    const select = new Random().getRandomNumber(1, Object.keys(LevelEnum).length / 2);
    switch (select) {
      case LevelEnum.Operador:
        message.creator = 'Operador';
        message.message = 'Hola, soy el operador en que puedo ayudarle.';
        break;
      case LevelEnum.Supervisor:
        message.creator = 'Supervisor';
        message.message = 'Hola, soy el supervisor en que puedo ayudarle.';
        break;
      case LevelEnum.Gerente:
        message.creator = 'Gerente';
        message.message = 'Hola, soy el gerente en que puedo ayudarle.';
        break;
    }
    return message;
  }

}
