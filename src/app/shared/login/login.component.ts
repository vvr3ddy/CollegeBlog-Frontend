import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { FacultyService } from '../../services/faculty.service';
import { CollegeService } from '../../services/college.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private facultyService: FacultyService,
    private collegeService: CollegeService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }
  onSubmit() {
    let role: String = this.loginForm.value.role;
    let username: String = this.loginForm.value.username;
    let password: String = this.loginForm.value.password;
    if (role === '1') {
      this.collegeService.findByUserName(username).subscribe(
        (data) => {
          if (data.password === password) {
            localStorage.setItem('collegeId', data.userName);
            localStorage.setItem('collegeCode', data.collegeCode);
            localStorage.setItem('isloggedIn', 'true');
            this.router.navigate(['college']).then(() => {
              window.location.reload();
            });
          } else {
            alert('Password Incorrect!');
          }
        },
        (err) => {
          alert(err.error);
        }
      );
    } else if (role === '2') {
      this.facultyService.findByUserName(username).subscribe(
        (data) => {
          if (data.password === password) {
            localStorage.setItem('facultyID', data.userName);
            localStorage.setItem('facultyCode', data.facultyCode);
            localStorage.setItem('collegeCode', data.collegeCode);
            localStorage.setItem('isloggedIn', 'true');
            this.router.navigate(['faculty']).then(() => {
              window.location.reload();
            });
          } else {
            alert('Password Incorrect!');
          }
        },
        (err) => {
          alert(err.error);
        }
      );
    } else if (role === '3') {
      this.studentService.findStudentByUserName(username).subscribe(
        (data) => {
          if (data.password === password) {
            localStorage.setItem('studentID', data.userName);
            localStorage.setItem('studentUSN', data.registrationNumber);
            localStorage.setItem('collegeCode', data.collegeCode);
            localStorage.setItem('isloggedIn', 'true');
            this.router.navigate(['student']).then(() => {
              window.location.reload();
            });
          } else {
            alert('Password Incorrect!');
          }
        },
        (err) => {
          alert(err.error);
        }
      );
    }
  }
}
