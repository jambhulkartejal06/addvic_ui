import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBlogComponent } from './view-blog.component';

const routes: Routes = [{ path: '', component: ViewBlogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewBlogRoutingModule { }
