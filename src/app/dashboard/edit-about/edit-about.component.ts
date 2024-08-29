// edit-about.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/about.services';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css'],
})
export class EditAboutComponent implements OnInit {
  @Input() aboutInfo: any; 
  @Output() close = new EventEmitter<void>(); 
  updatedInfo: any = {}; 

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.updatedInfo = { ...this.aboutInfo };
  }

  onSubmit() {
    this.updateAbout(this.updatedInfo);
  }

  updateAbout(updatedInfo: any) {
    this.dataService.updateAbout(updatedInfo).subscribe(
      (response) => {
        console.log('Update successful:', response); 
        this.close.emit(); 
      },
      (error) => {
        console.error('Error updating about information:', error);
      }
    );
  }

  closeModal() {
    this.close.emit();
  }
}
