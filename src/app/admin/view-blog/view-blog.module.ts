import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBlogRoutingModule } from './view-blog-routing.module';
import { ViewBlogComponent } from './view-blog.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewBlogComponent],
  imports: [
    CommonModule,
    ViewBlogRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewBlogModule { }
