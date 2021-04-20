import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchRoutingModule } from './batch-routing.module';
import { BatchComponent } from './batch.component';
import { ViewBatchesComponent } from './view-batches/view-batches.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BatchComponent, ViewBatchesComponent],
  imports: [
    CommonModule,
    BatchRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BatchModule { }
