import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    component: FacultyComponent,
  },
  {
    path: 'manage/students',
    component: ManageStudentsComponent,
  },
  {
    path: 'manage/posts',
    component: ManagePostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacultyRoutingModule {}
