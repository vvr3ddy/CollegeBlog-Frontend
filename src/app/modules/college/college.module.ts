import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeRoutingModule } from './college-routing.module';
import { CollegeComponent } from './college/college.component';
import { ManageFacultyComponent } from './manage-faculty/manage-faculty.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CollegeComponent,
    ManageFacultyComponent,
    ManageStudentsComponent,
    ManagePostsComponent,
  ],
  imports: [
    CommonModule,
    CollegeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CollegeModule {}
