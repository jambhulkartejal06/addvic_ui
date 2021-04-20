import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalCoursesComponent } from './mechanical-courses.component';

describe('MechanicalCoursesComponent', () => {
  let component: MechanicalCoursesComponent;
  let fixture: ComponentFixture<MechanicalCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicalCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicalCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
