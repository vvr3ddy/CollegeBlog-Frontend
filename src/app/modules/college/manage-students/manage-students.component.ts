import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListStudentDto } from 'src/app/dto/listStudentDto';
import { BlogpostService } from 'src/app/services/blogpost.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css'],
})
export class ManageStudentsComponent implements OnInit {
  studentList: ListStudentDto[];
  collegeCode: String;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private blogService: BlogpostService
  ) {}

  ngOnInit(): void {
    this.collegeCode = localStorage.getItem('collegeCode');
    this.studentService.listAllByClgCode(this.collegeCode).subscribe(
      (data) => {
        this.studentList = data;
      },
      (err) => {
        alert(err.error);
      }
    );
  }
  viewPosts(userName: String) {
    this.blogService.findByAuthor(userName).subscribe(
      (data) => {
        this.router.navigate(['viewPosts', userName], {relativeTo:this.route.parent});
      },
      (err) => {
        alert(err.error);
      }
    );
  }
  deleteStudent(USN: String) {
    this.studentService.deleteStudent(USN).subscribe(
      (data) => {
        alert(data);
        window.location.reload();
      },
      (err) => {
        alert(err.error);
      }
    );
  }
  goBack(){
    this.router.navigate(['college']);
  }
}
