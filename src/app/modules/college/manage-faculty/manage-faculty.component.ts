import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyService } from 'src/app/services/faculty.service';
import { ListFacultyDTO } from 'src/app/dto/listFacultyDto';
@Component({
  selector: 'app-manage-faculty',
  templateUrl: './manage-faculty.component.html',
  styleUrls: ['./manage-faculty.component.css'],
})
export class ManageFacultyComponent implements OnInit {
  facultyList: ListFacultyDTO[];
  collegeCode: String = localStorage.getItem('collegeCode');
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private facultyService: FacultyService
  ) {}

  ngOnInit(): void {
    this.facultyService.listFacultyByCollege(this.collegeCode).subscribe(
      (data) => {
        console.log(data);
        this.facultyList = data;
      },
      (err) => {
        alert(err.error);
      }
    );
  }
  delete(code: String) {
    this.facultyService.deleteFaculty(code).subscribe(
      (data) => {
        alert(data);
      },
      (err) => {
        alert(err.error);
      }
    );
  }
  goBack() {
    this.router.navigate(['college']);
  }
}
