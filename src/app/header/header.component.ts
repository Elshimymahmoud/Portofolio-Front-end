import { Component } from "@angular/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // or ['./css/header.component.css'] if your CSS file is in a subdirectory
})
export class HeaderComponent {
title = 'Elshimy'; // or any other property you want to expose to the template
tilteHome='home'
tilteabout='about'
tilteservices='Cv&skills'
tilteprojects='projects'
tiltecontact='contact me'




}