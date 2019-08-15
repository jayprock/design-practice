import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { GithubComponent } from './github.component';
import { GithubNavbarComponent } from './github-navbar/github-navbar.component';
import { GithubHomepageComponent } from './github-homepage/github-homepage.component';
import { GithubBannerComponent } from './github-banner/github-banner.component';
import { GithubButtonComponent } from './github-button/github-button.component';
import { GithubEnterpriseBannerComponent } from './github-enterprise-banner/github-enterprise-banner.component';
import { GithubCicdBannerComponent } from './github-cicd-banner/github-cicd-banner.component';

@NgModule({
  declarations: [GithubComponent, GithubNavbarComponent, GithubHomepageComponent, GithubBannerComponent, GithubButtonComponent, GithubEnterpriseBannerComponent, GithubCicdBannerComponent],
  imports: [
    CommonModule,
    GithubRoutingModule
  ]
})
export class GithubModule { }
