import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItRoutingModule } from './it-routing.module';
import { ItComponent } from './it.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ItComponent],
  imports: [
    CommonModule,
    ItRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ItModule { }
