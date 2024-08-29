import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  apiURL = 'http://localhost:3000/about';
  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiURL);
    }


    updateAbout(updatedInfo: any): Observable<any> {
      return this.http.patch(this.apiURL, updatedInfo);
    }
}
