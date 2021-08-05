import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPostDto } from 'src/app/dto/listPostDto';
import { BlogpostService } from 'src/app/services/blogpost.service';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.css'],
})
export class ManagePostsComponent implements OnInit {
  postList: ListPostDto[];
  post: ListPostDto;
  facultyCode: String = localStorage.getItem('facultyCode');
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogpostService
  ) {}

  ngOnInit(): void {
    this.blogService.findAllPosts().subscribe(
      (data) => {
        this.postList = data;
        console.log(this.postList);
      },
      (err) => {
        alert(err.error);
      }
    );
  }
  flagPost(postId: Number) {
    this.blogService.flagPostById(postId, this.facultyCode).subscribe(
      (data) => {
        alert(data);
        window.location.reload();
      },
      (err) => {
        alert(err.error);
      }
    );
  }

  goBack() {
    this.router.navigate(['/faculty']);
  }
}
