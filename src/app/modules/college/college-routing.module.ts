import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeComponent } from './college/college.component';
import { ManageFacultyComponent } from './manage-faculty/manage-faculty.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    component: CollegeComponent,
  },
  {
    path: 'managePosts',
    component: ManagePostsComponent,
  },
  {
    path: 'manageFaculty',
    component: ManageFacultyComponent,
  },
  {
    path: 'manageStudents',
    component: ManageStudentsComponent,
  },
  {
    path: 'viewPosts/:userName',
    component: ManagePostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollegeRoutingModule {}
