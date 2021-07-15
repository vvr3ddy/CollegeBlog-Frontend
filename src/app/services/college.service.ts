import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newCollegeDto } from '../dto/newCollegeDto';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  baseurl: String = "https://collegeblog-backend.herokuapp.com/college";
  constructor(private http: HttpClient) { }

  /**
   * 
   * @param collegeCode 
   * @returns Observable<any>
   */
  public deleteCollege(collegeCode: String): Observable<any> {
    console.log("Delete College Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseurl}/delete/${collegeCode}`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @param userName 
   * @returns Observable<any>
   */
  public findByUserName(userName: String): Observable<any> {
    console.log("Find College By UserName Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseurl}/get/userName/${userName}`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @returns Observable<any>
   */
  public listAllColleges(): Observable<any> {
    console.log("List All College Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseurl}/get`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @param newCollege 
   * @returns Observable<any>
   */
  public newCollege(newCollege: newCollegeDto): Observable<any> {
    console.log("Create new College Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseurl}/add`, newCollege, { headers, responseType: 'json' });
  }

  /**
   * 
   * @param college 
   * @returns Observable<any>
   */
  public updateCollege(collegeCode: String, college: newCollegeDto): Observable<any> {
    console.log("Update College Method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseurl}/update/${collegeCode}`, college, { headers, responseType: 'json' });
  }
}
