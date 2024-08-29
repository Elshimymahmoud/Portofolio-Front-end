import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/send-email', this.contactForm).subscribe(
      response => {
        console.log('Email sent successfully:', response);
        alert('Your message has been sent successfully.');
      },
      error => {
        console.error('Error sending email:', error);
        alert('There was an error sending your message. Please try again.');
      }
    );
  }
}