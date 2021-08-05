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
  url: String;
  userSpecific: Boolean;
  username: String;
  postList: ListPostDto[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogpostService
  ) {}

  ngOnInit(): void {
    this.url = this.router.url;
    if (this.url.indexOf('viewPosts') !== -1) {
      this.userSpecific = true;
      this.username = this.route.snapshot.params['userName'];
      this.blogService.findByAuthor(this.username).subscribe(
        (data) => {
          this.postList = data;
        },
        (err) => {
          alert(err.error);
        }
      );
    } else {
      this.userSpecific = false;
      this.blogService.findAllPosts().subscribe(
        (data) => {
          console.log(data);
          this.postList = data;
        },
        (err) => {
          alert(err.error);
        }
      );
    }
  }
  deletePost(postId: Number) {
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
  goBack() {
    this.router.navigate(['college']);
  }
}
