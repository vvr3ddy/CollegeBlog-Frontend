import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  newPost() {
    this.router.navigate(['addPost'], { relativeTo: this.route });
  }
  managePosts() {
    this.router.navigate(['managePosts'], { relativeTo: this.route });
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
