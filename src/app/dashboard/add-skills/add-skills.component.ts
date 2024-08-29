import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SkillsService } from '../../services/skills.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css']
})
export class AddSkillsComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  newSkill = { title: '', category: '', progress: 0 };

  constructor(private skillsService: SkillsService) {}

  addSkill() {
    this.skillsService.createSkill(this.newSkill).subscribe(() => {
      this.close.emit(); 
    });
  }
 
  closeModal() {
    this.close.emit();
  }

  
}
