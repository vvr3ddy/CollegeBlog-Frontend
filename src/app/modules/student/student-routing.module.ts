import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AddPostComponent } from './add-post/add-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
const routes: Routes = [
  {
    path: '',
    redirectTo:'',
    component: StudentComponent
  },
  {
    path: 'addPost',
    component: AddPostComponent
  },
  {
    path: 'deletePost',
    component: DeletePostComponent
  },
  {
    path: 'updatePost',
    component: UpdatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
