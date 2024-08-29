import { Component, OnInit, OnDestroy } from '@angular/core';
import Typed from 'typed.js';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  services!: any[];
  portfolios!: any[];
  counters!: {
    doneProjects: number,
    onGoing: number,
    totalProjects: number
  };
  info!: {
    title: string
    prof1: string
    prof2: string
    prof3: string
  }
  
  private subscription: Subscription = new Subscription();

  constructor(private _dataS: DataService) {}

  ngOnInit(): void {
    const getSub = this._dataS.getProducts().subscribe((data) => {
      this.services = data.data[0].services;
      this.portfolios = data.data[0].projects;
      this.counters = data.data[0].stats;
      this.info = {
        title : data.data[0].mainTitle,
        prof1 : data.data[0].proffessions[0],
        prof2 : data.data[0].proffessions[1],
        prof3 : data.data[0].proffessions[2],
      }
      console.log(data.data[0]);
    });
    this.subscription.add(getSub);

    const options = {
      strings: ['', this.info ? this.info.prof1 : '', this.info ? this.info.prof2 : '', 'MEAN Stack'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };
    
    new Typed('.typed', options).reset(true);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
