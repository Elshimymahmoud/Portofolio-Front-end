// home.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class DashboardComponent implements OnInit {
  services: any[] = [];
  projects: any[] = [];
  selectedService: any = {};
  isEditModalOpen = false;
  selectedProject: any = {};
  isEditProjectModalOpen = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataService.getProducts().subscribe((response: any) => {
      this.services = response.data[0].services;
      this.projects = response.data[0].projects;
    });
  }
  editService(service: any) {
    this.selectedService = { ...service }; 
    this.isEditModalOpen = true;
  }
  

  editProject(project: any) {
    this.selectedProject = { ...project };
    this.isEditProjectModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
  }

  closeEditProjectModal() {
    this.isEditProjectModalOpen = false;
  }

  updateService(updatedService: any) {
    const serviceId = updatedService._id;
    console.log('Updating service with ID:', serviceId); // Debug: Verify the ID value
    if (serviceId) {
      this.dataService.updateService(serviceId, updatedService).subscribe(
        (response) => {
          console.log('Service updated:', response);
          this.loadData(); // Refresh the data
          this.closeEditModal(); // Close the modal
        },
        (error) => {
          console.error('Error updating service:', error);
        }
      );
    } else {
      console.error('Service ID is missing in updateService method');
    }
  }
  

  updateProject(updatedProject: any) {
    const projectId = updatedProject._id;
    this.dataService.updateProject(projectId, updatedProject).subscribe(
      (response) => {
        this.loadData();
        this.closeEditProjectModal();
      },
      (error) => {
        console.error('Error updating project:', error);
      }
    );
  }
}
