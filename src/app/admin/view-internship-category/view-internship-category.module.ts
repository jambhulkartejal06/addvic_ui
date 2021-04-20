import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewInternshipCategoryRoutingModule } from './view-internship-category-routing.module';
import { ViewInternshipCategoryComponent } from './view-internship-category.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/materialmodule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewInternshipCategoryComponent],
  imports: [
    CommonModule,
    ViewInternshipCategoryRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewInternshipCategoryModule { }
