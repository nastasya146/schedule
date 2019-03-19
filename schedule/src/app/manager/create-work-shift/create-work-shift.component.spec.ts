import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkShiftComponent } from './create-work-shift.component';

describe('CreateWorkShiftComponent', () => {
  let component: CreateWorkShiftComponent;
  let fixture: ComponentFixture<CreateWorkShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWorkShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
