import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewHiringRoutingModule } from './view-hiring-routing.module';
import { ViewHiringComponent } from './view-hiring.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewHiringComponent],
  imports: [
    CommonModule,
    ViewHiringRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewHiringModule { }
