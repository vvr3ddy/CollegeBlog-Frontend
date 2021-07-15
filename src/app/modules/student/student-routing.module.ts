import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ManagePostsComponent } from './manage-posts/manage-posts.component';
import { UpdatePostComponent } from './update-post/update-post.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    component: StudentComponent,
  },
  {
    path: 'addPost',
    component: AddPostComponent,
  },
  {
    path: 'managePosts',
    component: ManagePostsComponent,
  },
  {
    path: 'updatePost/:id',
    component: UpdatePostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
