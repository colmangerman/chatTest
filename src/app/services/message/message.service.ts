import { HttpClient } from '@angular/common/http';
import { Random } from './../../helpers/random';
import { Message } from './../../model/message';
import { Injectable } from '@angular/core';
import { LevelEnum } from 'src/app/helpers/levelEnum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  url = 'https://localhost:44344';

  constructor(private http: HttpClient) { }

  getResponse(): Observable<Message> {
    return this.http.post<Message>(this.url + '/Message/Response', null);
  }

}
