import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { FacultyService } from '../../services/faculty.service';
import { CollegeService } from '../../services/college.service';
import { newStudentDto } from 'src/app/dto/newStudentDto';
import { newFacultyDto } from 'src/app/dto/newFacultyDto';
import { newCollegeDto } from 'src/app/dto/newCollegeDto';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private facultyService: FacultyService,
    private collegeService: CollegeService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fName: ['', [Validators.required]],
      lName: ['', [Validators.required]],
      clgCode: ['', [Validators.required]],
      uName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
      usn: ['', [Validators.required]]
    });
  }

  createUser() {
    let role: String = this.signUpForm.value.role;
    let username: String = this.signUpForm.value.uName;
    if (role === "3") {

      let newStudent: newStudentDto = new newStudentDto();
      newStudent.firstName = this.signUpForm.value.fName;
      newStudent.lastName = this.signUpForm.value.lName;
      newStudent.collegeCode = this.signUpForm.value.clgCode;
      newStudent.password = this.signUpForm.value.password;
      newStudent.registrationNumber = this.signUpForm.value.usn;
      newStudent.userName = this.signUpForm.value.uName;

      this.studentService.createNewStudent(newStudent)
        .subscribe(
          data => {
            alert("User Created Successfully!");
            this.router.navigate(['login']);
          },
          err => {
            alert(err.error);
          }
        );
    } else if (role === "2") {
      let newFaculty: newFacultyDto = new newFacultyDto();
      newFaculty.userName = this.signUpForm.value.uName;
      newFaculty.lastName = this.signUpForm.value.lName;
      newFaculty.collegeCode = this.signUpForm.value.clgCode;
      newFaculty.firstName = this.signUpForm.value.fName;
      newFaculty.password = this.signUpForm.value.password;
      newFaculty.facultyCode = this.signUpForm.value.usn;

      this.facultyService.createNewFaculty(newFaculty)
        .subscribe(
          data => {
            alert("User Created Successfully!");
            this.router.navigate(['login']);
          },
          err => { alert(err.error); }
        );

    } else if (role === "1") {
      let newCollege: newCollegeDto = new newCollegeDto();
      newCollege.collegeName = this.signUpForm.value.fName;
      newCollege.collegeCode = this.signUpForm.value.clgCode;
      newCollege.password = this.signUpForm.value.password;
      newCollege.userName = this.signUpForm.value.uName;

      this.collegeService.newCollege(newCollege)
        .subscribe(
          data => {
            alert("User Created Successfully!");
            this.router.navigate(['login']);
          },
          err => { alert(err.error); }
        );
    }
  }

}
