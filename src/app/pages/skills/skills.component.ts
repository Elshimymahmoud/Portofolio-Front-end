import { Component, OnInit } from '@angular/core';
import { ISkill, SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent  implements OnInit{
  // skills:any={
  //   technologies:[{name:"Java, J2EE",percent:90,remark:'excellent'}, {name:"Node",percent:30,remark:'good'},{name:"Python, C++",percent:70,remark:'very-good'}, {name:"JavaScript, BootStrap, Angular", percent:90,remark:'excellent'}],
  //   tools:[{name:"Git",percent:90,remark:'excellent'},{name:"Office",percent:90,remark:'excellent'},{name:"Linux, Windows",percent:70,remark:'very-good'},{name:"MySql, PgSql",percent:90,remark:'excellent'},{name:"Docker, Kubernetes",percent:50,remark:'average'}],
  //   methodologies:[{name:"Scrum",percent:70,remark:'very-good'},{name:"Uml",percent:90,remark:'excellent'},{name:"Disign Thinking",percent:70,remark:'good'},{name:"TDD",percent:90,remark:'excellent'},{name:"DevOps",percent:50,remark:'average'}]
  // };
  toolsSkills: ISkill[] = [];
  methodologiesSkills: ISkill[] = [];
  technologiesSkills: ISkill[] = [];


 


  constructor(private _dataS: SkillsService) {
  }

  ngOnInit(){
    this._dataS.getAllSkills().subscribe(res => {
      this.toolsSkills = res.data.filter((skill: ISkill) => skill.category === 'tools');
      this.methodologiesSkills = res.data.filter((skill: ISkill) => skill.category === 'methodologies');
      this.technologiesSkills = res.data.filter((skill: ISkill) => skill.category === 'technologies');
    })
  }
   title="Skills"
}
