import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURL = 'http://localhost:3000/home';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

  updateProject(id: string, project: any): Observable<any> {
    return this.http.patch(`${this.apiURL}/projects/${id}`, project);
  }

updateService(id: string, service: any): Observable<any> {
  return this.http.patch(`${this.apiURL}/services/${id}`, service);
}

}
