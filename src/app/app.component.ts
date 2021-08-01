import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog-Frontend';
  loggedIn: String = String(localStorage.getItem('isLoggedIn'));
  ngOnInit(): void {
    console.log(this.loggedIn);
  }
}
