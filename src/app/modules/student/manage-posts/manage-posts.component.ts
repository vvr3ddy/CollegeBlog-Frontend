import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { newPostDto } from 'src/app/dto/newPostDto';
import { BlogpostService } from 'src/app/services/blogpost.service';
import { ListPostDto } from '../../../dto/listPostDto';
@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.css'],
})
export class ManagePostsComponent implements OnInit {
  studentUSN: String;
  studentCode: String;
  updatedPost: newPostDto;
  postList: ListPostDto[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogpostService
  ) {}

  ngOnInit(): void {
    this.studentUSN = localStorage.getItem('studentUSN');
    this.studentCode = localStorage.getItem('studentID');
    this.blogService.findByAuthor(this.studentCode).subscribe(
      (data) => {
        this.postList = data;
      },
      (err) => {
        alert(err.error);
      }
    );
  }
  updatePost(postId: number) {
    this.router.navigate(['updatePost', postId], {
      relativeTo: this.route.parent,
    });
  }
  deletePost(postId: number) {
    this.blogService.deletePost(postId).subscribe(
      (data) => {
        alert(data);
        window.location.reload();
      },
      (err) => {
        alert(err.error);
      }
    );
  }
}
