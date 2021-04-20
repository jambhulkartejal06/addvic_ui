import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewContactUsRoutingModule } from './view-contact-us-routing.module';
import { ViewContactUsComponent } from './view-contact-us.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewContactUsComponent],
  imports: [
    CommonModule,
    ViewContactUsRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewContactUsModule { }
