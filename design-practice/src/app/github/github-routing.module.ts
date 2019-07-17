import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github.component';
import { GithubNavbarComponent } from './github-navbar/github-navbar.component';
import { GithubHomepageComponent } from './github-homepage/github-homepage.component';

const routes: Routes = [
  { path: 'github', 
    component: GithubComponent, 
    children: [
      { path: '', component: GithubHomepageComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
