import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ManagerRoutingModule } from './manager-routing.module';
import { MainComponent } from './main/main.component';
import { ApprovalComponent } from './approval/approval.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material';
import { CreateWorkShiftComponent } from './create-work-shift/create-work-shift.component';
import { SharedModule } from '../shared/shared.module';
import { WorkShiftComponent } from './work-shift/work-shift.component';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [MainComponent, ApprovalComponent, CreateWorkShiftComponent, WorkShiftComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    FormsModule,   
    ReactiveFormsModule,
    SharedModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
