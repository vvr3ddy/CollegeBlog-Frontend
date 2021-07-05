import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newPostDto } from '../dto/newPostDto';

@Injectable({
  providedIn: 'root'
})
export class BlogpostServiceService {
  baseUrl: string = "https://collegeblog-backend.herokuapp.com/posts";
  constructor(private http: HttpClient) { }

  /**
   * 
   * @param postId 
   * @returns Observable<any>
   */
  public approvePost(postId: Number): Observable<any> {
    console.log("Approve Post Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/approve/${postId}`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @param postId 
   * @returns Observable<any>
   */
  public deletePost(postId: Number): Observable<any> {
    console.log("Delete Post Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.baseUrl}/delete/${postId}`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @returns Observable<any>
   */
  public findAllPosts(): Observable<any> {
    console.log("Find All Posts Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get`, { headers, responseType: "json" });
  }

  /**
   * 
   * @param userName 
   * @returns Observable<any>
   */
  public findByAuthor(userName: String): Observable<any> {
    console.log("Find Posts By Author Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/findByAuthor/${userName}`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @returns Observable<any>
   */
  public getFlaggedPosts(): Observable<any> {
    console.log("Get Flagged Posts Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/get/flaggedPosts`, { headers, responseType: 'json' });
  }

  /**
   * 
   * @param postId 
   * @param facultyCode 
   * @returns Observable<any>
   */
  public flagPostById(postId: Number, facultyCode: String): Observable<any> {
    console.log("Flag a Post Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/flagPost/${postId}`, facultyCode, { headers, responseType: 'json' });
  }

  /**
   * 
   * @param newPost 
   * @returns Observable<any>
   */
  public createNewPost(newPost: newPostDto): Observable<any> {
    console.log("New Post Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${this.baseUrl}/add`, newPost, { headers, responseType: 'json' });
  }

  public updatePost(postId: Number, post: newPostDto): Observable<any> {
    console.log("Update Post Method.");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.baseUrl}/update/${postId}`, post, { headers, responseType: 'json' });
  }

}
