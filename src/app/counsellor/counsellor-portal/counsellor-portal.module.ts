import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounsellorPortalRoutingModule } from './counsellor-portal-routing.module';
import { CounsellorPortalComponent } from './counsellor-portal.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CounsellorPortalComponent],
  imports: [
    CommonModule,
    CounsellorPortalRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CounsellorPortalModule { }
