import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyComponent } from './faculty/faculty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';

@NgModule({
  declarations: [
    FacultyComponent,
    ManageStudentsComponent,
    ManagePostsComponent,
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class FacultyModule {}
