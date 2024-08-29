import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
private apiUrl='http://localhost:3000/projects'
  getAllprojects(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/projects'); // Update with your actual endpoint
  }
  addProject(project: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, project);
  }

  updateProject(id: string, project: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, project);
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  
}

