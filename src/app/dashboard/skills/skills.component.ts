import { Component, OnInit } from '@angular/core';
import { SkillsService, ISkill } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class dashbardSkillsComponent implements OnInit{
  
  skills: ISkill[] = [];
  isAddSkillModalOpen = false;
  isDeleteSkillModalOpen = false;
  selectedSkill: ISkill | null = null;

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills() {
    this.skillsService.getAllSkills().subscribe(
      (response: any) => {
        console.log('Skills loaded:', response.data); 
        this.skills = response.data; 
      },
      (error) => {
        console.error('Error fetching skills:', error);
      }
    );
  }

  openAddSkillModal() {
    this.isAddSkillModalOpen = true;
  }

  closeAddSkillModal() {
    this.isAddSkillModalOpen = false;
    this.loadSkills(); // This ensures the updated skills list is fetched from the database
  }
  

  openDeleteSkillModal(skill: ISkill) {
    this.selectedSkill = skill;
    this.isDeleteSkillModalOpen = true;
  }

  closeDeleteSkillModal() {
    this.isDeleteSkillModalOpen = false;
    this.loadSkills(); 
  }
}
