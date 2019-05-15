import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { GithubNavbarComponent } from './github-navbar/github-navbar.component';

@NgModule({
  declarations: [GithubComponent, GithubNavbarComponent],
  imports: [
    CommonModule,
    GithubRoutingModule
  ]
})
export class GithubModule { }
