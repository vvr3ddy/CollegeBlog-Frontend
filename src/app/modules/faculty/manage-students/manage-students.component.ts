import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { ListStudentDto } from '../../../dto/listStudentDto';
@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css'],
})
export class ManageStudentsComponent implements OnInit {
  studentList: ListStudentDto[];
  collegeCode: String = localStorage.getItem('collegeCode');
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.listAllByClgCode(this.collegeCode).subscribe(
      (data) => {
        this.studentList = data;
      },
      (err) => {
        alert(err.error);
      }
    );
  }
}
