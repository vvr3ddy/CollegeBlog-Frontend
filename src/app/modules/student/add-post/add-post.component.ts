import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { newPostDto } from 'src/app/dto/newPostDto';
import { BlogpostService } from '../../../services/blogpost.service'
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  newPostForm: FormGroup;
  newPost: newPostDto;
  constructor(private formBuilder: FormBuilder, private router: Router, private blogService: BlogpostService) { }

  ngOnInit(): void {
    this.newPostForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }
  createPost() {
    this.newPost = new newPostDto();
    this.newPost.createdBy = localStorage.getItem('studentUSN');
    this.newPost.postTitle = this.newPostForm.value.title;
    this.newPost.postDescription = this.newPostForm.value.description;
    this.blogService.createNewPost(this.newPost)
      .subscribe(
        data=>{
          alert("Created a new Post Successfully!");
        },
        err=>{
          alert(err.error);
          console.log(err.error);
        });
  }
  

}
