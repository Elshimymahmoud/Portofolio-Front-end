// about.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/about.services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class dashbardAboutComponent implements OnInit {
  infoarr: any = {};
  isEditAboutModalOpen = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataService.getProducts().subscribe((response: any) => {
      console.log('Response Data:', response);
      this.infoarr = response.data[0]; // Assume there's only one about info object
    });
  }

  openEditAboutModal() {
    this.isEditAboutModalOpen = true;
  }

  closeEditAboutModal() {
    this.isEditAboutModalOpen = false;
    this.loadData(); // Refresh data after closing modal
  }
}
