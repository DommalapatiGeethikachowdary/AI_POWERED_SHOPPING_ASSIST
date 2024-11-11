import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  authtoken: boolean = localStorage.getItem('isLoggedin')=='true' ? true : false
  conversation = new Subject<Message[]>();
  constructor() { }
  messageMap:any = {
    "hi": "Hello",
    "who are you": "My name is Test Sat Bot",
    "what is your role": "Just guide for the user",
    "defaultmsg": "I can't understand your text. Can you please repeat",
    "bye":  "ok see you later",
    "what's your name?": "skyzy",
    "what services do you provide?": "any thing you want",
    "hello": "bye",
    "love u":"love u 2",
    "i am bore":"let talk with me",
    "help":"what i want to help u",
    "book tickets": "go to the ticket button in the home page it will display the place with the book tickets",
    "show some dress": "go to the ticket button in the home page it will display the place with the book tickets"
    


    
  

  }
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(() => {
      this.conversation.next([botMessage]);
    }, 1500);
  }
  getBotMessage(question: string) {
    let answer = this.messageMap[question];
    return answer || this.messageMap['defaultmsg'];
  }
}
