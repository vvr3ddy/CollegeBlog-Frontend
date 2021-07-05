import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newFacultyDto } from '../dto/newFacultyDto';

@Injectable({
  providedIn: 'root'
})
export class FacultyServiceService {
  baseUrl: String = 'https://collegeblog-backend.herokuapp.com/faculty';
  constructor(private http: HttpClient) { }

  /**
   * 
   * @param facultyCode 
   * @returns Observable<any>
   */
  public deleteFaculty(facultyCode: String): Observable<any> {
    console.log("Delete Faculty Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/delete/${facultyCode}`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @param facultyCode 
   * @returns Observable<any>
   */
  public findFacultyByCode(facultyCode: String) {
    console.log("Find Faculty By Code Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/id/${facultyCode}`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @param userName 
   * @returns Observable<any>
   */
  public findByUserName(userName: String): Observable<any> {
    console.log("Find by username");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/userName/${userName}`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @returns Observable<any>
   */
  public listAllFaculty(): Observable<any> {
    console.log("List All Faculty Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/all`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @param collegeCode 
   * @returns Observable<any>
   */
  public listFacultyByCollege(collegeCode: String): Observable<any> {
    console.log("List Faculty by College Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/college/${collegeCode}`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @param newFaculty 
   * @returns Observable<any>
   */
  public createNewFaculty(newFaculty: newFacultyDto): Observable<any> {
    console.log("Create New Faculty Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/add`, newFaculty, { headers, responseType: 'json' });
  }
  /**
   * 
   * @param facultyCode 
   * @param faculty 
   * @returns Observable<any>
   */
  public updateFaculty(facultyCode: String, faculty: newFacultyDto): Observable<any> {
    console.log("Update Faculty Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/update/${facultyCode}`, faculty, { headers, responseType: 'json' });
  }

}
