import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { MainComponent } from './main/main.component';
import { CreateWorkScheduleComponent } from './create-work-schedule/create-work-schedule.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [MainComponent, CreateWorkScheduleComponent]
})
export class UserModule { }
