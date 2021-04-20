import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MechanicalDesignRoutingModule } from './mechanical-design-routing.module';
import { MechanicalDesignComponent } from './mechanical-design.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MechanicalDesignComponent],
  imports: [
    CommonModule,
    MechanicalDesignRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MechanicalDesignModule { }
