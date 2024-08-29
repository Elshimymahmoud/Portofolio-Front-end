import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from './../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class DashboardProjectsComponent implements OnInit {
  projects: any[] = [];
  isAddModalOpen = false;
  isEditModalOpen = false;
  currentEditId: string | null = null;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getAllprojects().subscribe((data) => {
      this.projects = data.data;
    });
  }

  openAddModal(): void {
    this.isAddModalOpen = true;
  }

  closeAddModal(): void {
    this.isAddModalOpen = false;
  }

  openEditModal(projectId: string): void {
    this.currentEditId = projectId;
    this.isEditModalOpen = true;
  }

  closeEditModal(): void {
    this.isEditModalOpen = false;
  }

  deleteProject(id: string): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe(() => {
        alert('Project deleted successfully');
        this.loadProjects();
      });
    }
  }
}
