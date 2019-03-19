import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { MainComponent } from './main/main.component';
import { ApprovalComponent } from './approval/approval.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreateWorkShiftComponent } from './create-work-shift/create-work-shift.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent, ApprovalComponent, CreateWorkShiftComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    SharedModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
