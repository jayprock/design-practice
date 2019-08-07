import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-button',
  templateUrl: './github-button.component.html',
  styleUrls: ['./github-button.component.css']
})
export class GithubButtonComponent implements OnInit {

  @Input() label: string;
  @Input() bgColor: string = 'green';
  @Input() size: string = 'medium';
  @Input() stretch: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
