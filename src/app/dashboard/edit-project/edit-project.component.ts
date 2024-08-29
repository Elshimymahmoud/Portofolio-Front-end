import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from './../../services/projects.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  project: any = {};

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.projectService.getAllprojects().subscribe((data) => {
      this.project = data.data.find((p: any) => p._id === projectId);
    });
  }

  onSubmit(): void {
    this.projectService.updateProject(this.project._id, this.project).subscribe(() => {
      alert('Project updated successfully');
      this.close();
    });
  }

  close(): void {
    this.isOpen = false;
    this.closeModal.emit();
  }
}
