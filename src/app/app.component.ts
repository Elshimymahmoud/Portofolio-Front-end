import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
router=inject(Router)
isActiveDash=false;
ngDoCheck(){
  if(this.router.url.includes('dashboard')){
this.isActiveDash=true;

  }
}  
}
