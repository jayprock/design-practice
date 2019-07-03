import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-navbar',
  templateUrl: './github-navbar.component.html',
  styleUrls: ['./github-navbar.component.css']
})
export class GithubNavbarComponent implements OnInit {

  searchFocus = false;
  searchPlaceholder = "Search Github";

  constructor() { }

  ngOnInit() {
  }

  displayDropdownMenu(event: any, display: boolean) {
    event.currentTarget.open = display;
  }

  onSearchFocus() {
    this.searchFocus = true;
    this.searchPlaceholder = "";
  }

  onSearchBlur() {
    this.searchFocus = false;
    this.searchPlaceholder = "Search Github";
  }

}
