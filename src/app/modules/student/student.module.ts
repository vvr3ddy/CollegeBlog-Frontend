import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { AddPostComponent } from './add-post/add-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';


@NgModule({
  declarations: [StudentComponent, AddPostComponent, DeletePostComponent, UpdatePostComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
