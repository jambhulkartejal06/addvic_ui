import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItCategoryRoutingModule } from './it-category-routing.module';
import { ItCategoryComponent } from './it-category.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ItCategoryComponent],
  imports: [
    CommonModule,
    ItCategoryRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ItCategoryModule { }
