import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from './../../services/projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  project = {
    projectTitle: '',
    projectTools: '',
    projectDescription: '',
    image: '',
    projectLink: ''
  };

  constructor(private projectService: ProjectService, private router: Router) {}

  onSubmit(): void {
    this.projectService.addProject(this.project).subscribe(() => {
      alert('Project added successfully');
      this.close();
    });
  }

  close(): void {
    this.isOpen = false;
    this.closeModal.emit();
  }
}
