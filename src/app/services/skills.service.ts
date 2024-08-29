import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }
  private apiURL='http://localhost:3000/skills'
  
  getAllSkills(): Observable<any>{
    return this.http.get("http://localhost:3000/skills");
  }


  
  createSkill(skill: any): Observable<any> {
    return this.http.post<any>(this.apiURL, skill);
  }
  deleteSkill(skillId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${skillId}`);
  }




}

export interface ISkill {
  _id?: string;
  title: string;
  category: string;
  progress: number;
}