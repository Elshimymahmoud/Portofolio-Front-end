import { Component ,OnDestroy,OnInit} from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import{DataService}from"../../services/about.services"
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy{
  private subscription: Subscription = new Subscription();
  constructor(private _dataS: DataService) {}
info!:{
  title:String;
  FirstDescription:String;
  SecondDescription:String;
  address:String;
  age:number;
  degree:String;
  image:String;
  linkedIn:String;
  github:String;
}
  ngOnInit(): void {
    const getSub = this._dataS.getProducts().subscribe((data) => {
     
      this.info= {
        title : data.data[0].title,
        FirstDescription : data.data[0].FirstDescription,
        SecondDescription : data.data[0].SecondDescription,
        address : data.data[0].address,
        age : data.data[0].age,
        degree : data.data[0].degree,
        image : data.data[0].image,
        linkedIn : data.data[0].linkedIn,
        github : data.data[0].github

      }
      console.log(data.data[0]);
    });
    this.subscription.add(getSub);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

