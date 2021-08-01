import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollegeService } from 'src/app/services/college.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css'],
})
export class CollegeComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private collegeService: CollegeService
  ) {}

  ngOnInit(): void {
    console.log('College Component');
  }
  manageFaculty() {
    this.router.navigate(['manageFaculty'], { relativeTo: this.route });
  }
  manageBlogs() {
    this.router.navigate(['managePosts'], { relativeTo: this.route });
  }
  manageStudents() {
    this.router.navigate(['manageStudents'], { relativeTo: this.route });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
