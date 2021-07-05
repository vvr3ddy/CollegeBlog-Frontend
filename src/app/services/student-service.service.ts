import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { newStudentDto } from '../dto/newStudentDto';
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  baseUrl: String = "https://collegeblog-backend.herokuapp.com/student";
  constructor(private http: HttpClient) { }

  /**
   * 
   * @param studentUSN 
   * @returns Observable<any>
   */
  public deleteStudent(studentUSN: String): Observable<any> {
    console.log("Delete Student Method");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/delete/${studentUSN}`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @param userName 
   * @returns Observable<any>
   */
  public findStudentByUserName(userName: String): Observable<any> {
    console.log("Find Student by UserName Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/userName/${userName}`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @param studentUSN 
   * @returns Obsevable<any>
   */
  public findStudentByUSN(studentUSN: String): Observable<any> {
    console.log("Find Student By USN Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/USN/${studentUSN}`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @param collegeCode 
   * @returns Observable<any>
   */
  public listAllByClgCode(collegeCode: String): Observable<any> {
    console.log("List All Students by College Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/college/${collegeCode}`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @returns Observable<any>
   */
  public listAllStudents(): Observable<any> {
    console.log("List All Students Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/all`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @param newStudent 
   * @returns Observable<any>
   */
  public createNewStudent(newStudent: newStudentDto): Observable<any> {
    console.log("Create New Student Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/add`, newStudent, { headers, responseType: 'json' })
  }

  /**
   * 
   * @param studentUSN 
   * @param student 
   * @returns Observable<any>
   */
  public updateStudent(studentUSN: String, student: newStudentDto): Observable<any> {
    console.log("Update Student Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/update/${studentUSN}`, student, { headers, responseType: 'json' });
  }

}
