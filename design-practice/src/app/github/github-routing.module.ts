import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github.component';
import { GithubNavbarComponent } from './github-navbar/github-navbar.component';

const routes: Routes = [
  { path: 'github', component: GithubComponent },
  { path: 'github-navbar', component: GithubNavbarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
