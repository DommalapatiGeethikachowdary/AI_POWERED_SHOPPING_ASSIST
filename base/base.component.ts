import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ChatbotService, Message } from '../chatbot.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  messages: Message[] = [];
  isPopupVisible: boolean = true;
  isVisible: any = false;
  value: string;
  product: any;
  search: any;

  constructor(private router: Router, private chatbot: ChatbotService) { }

  ngOnInit(): void {


    this.chatbot.conversation.subscribe((val) => {
      // this.datetime = moment(new Date()).format('HH:mm:ss');
      this.messages = this.messages.concat(val);
      setTimeout(() => {
        this.scrollToBottom();
      }, 0);
    });
  }

  logout() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once logged out, you will need to log in again to access the application.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform logout logic here (e.g., clear user session)
        localStorage.removeItem('isLoggedin');

        // Redirect to login page
        this.router.navigate(['auth/login']);
      }
    });
  }

  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
    this.isVisible = true;
  }

  togglePopups() {
    this.isVisible = !this.isVisible;
    this.isPopupVisible = true;
  }



  getPassedData(event: any) {
    // Your event handling code here
  }

  geturl(link: string) {
    window.open(link, '_blank');
  }
  
  sendMessage() {
    this.chatbot.getBotAnswer(this.value);
    this.value = '';
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  }



  scrollToBottom(): void {
    try {
    } catch (err) { }
  }
  onSearch() {
    if(this.search){

      let data = this.search
      this.search=''
      this.router.navigate(['search'], { state: { data } });
    }
  }

}


