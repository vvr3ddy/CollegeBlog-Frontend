import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePostComponent } from './update-post/update-post.component';



@NgModule({
  declarations: [StudentComponent, AddPostComponent, ManagePostsComponent, UpdatePostComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentModule { }
