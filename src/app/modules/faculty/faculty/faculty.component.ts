import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],
})
export class FacultyComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  managePosts() {
    this.router.navigate(['manage/posts'], { relativeTo: this.route });
  }
  manageStudents() {
    this.router.navigate(['manage/students'], { relativeTo: this.route });
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
