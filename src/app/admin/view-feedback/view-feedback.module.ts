import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFeedbackRoutingModule } from './view-feedback-routing.module';
import { ViewFeedbackComponent } from './view-feedback.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewFeedbackComponent],
  imports: [
    CommonModule,
    ViewFeedbackRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewFeedbackModule { }
