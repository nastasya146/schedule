import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { MainComponent } from './main/main.component';
import { CreateWorkScheduleComponent } from './create-work-schedule/create-work-schedule.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatInputModule, MatIconModule, MatListModule, MatSelectModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';

@NgModule({
    imports: [
        CommonModule,
        MatDatepickerModule,
        MatNativeDateModule, 
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatSelectModule,
        FormsModule,   
        ReactiveFormsModule,
        UserRoutingModule
    ],
    declarations: [MainComponent, CreateWorkScheduleComponent],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'ru-Ru'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
    ]
})

export class UserModule {
    constructor(private adapter: DateAdapter<any>) {}
}
