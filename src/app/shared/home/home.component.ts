import { Component, OnInit } from '@angular/core';
import { ListPostDto } from 'src/app/dto/listPostDto';
import { BlogpostService } from 'src/app/services/blogpost.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  postList: ListPostDto[];
  constructor(private blogService: BlogpostService) {}

  ngOnInit(): void {
    this.blogService.findAllPosts().subscribe(
      (data) => {
        this.postList = data;
      },
      (err) => {
        alert(err.error);
      }
    );
  }
}
