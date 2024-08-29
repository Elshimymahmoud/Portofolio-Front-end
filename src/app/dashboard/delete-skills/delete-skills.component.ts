import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-delete-skills',
  templateUrl: './delete-skills.component.html',
  styleUrls: ['./delete-skills.component.css']
})
export class DeleteSkillsComponent {
  @Input() isOpen: boolean = false;
  @Input() skillToDelete: any;
  @Output() close = new EventEmitter<void>();
  
  constructor(private skillsService: SkillsService) {}

  deleteSkill() {
    if (this.skillToDelete && this.skillToDelete._id) {
      this.skillsService.deleteSkill(this.skillToDelete._id).subscribe(() => {
        this.close.emit(); // Notify parent to close modal
        // Refresh data or notify parent component to refresh
      });
    }
  }

  closeModal() {
    this.close.emit();
  }
}
