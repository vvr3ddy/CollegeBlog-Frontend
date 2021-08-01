import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isLoggedIn: boolean = Boolean(localStorage.getItem('loggedIn'));
  constructor(private router: Router) {}

  ngOnInit(): void {}
  logOut() {
    localStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
