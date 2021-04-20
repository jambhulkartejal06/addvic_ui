import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInternshipCourseComponent } from './view-internship-course.component';

describe('ViewInternshipCourseComponent', () => {
  let component: ViewInternshipCourseComponent;
  let fixture: ComponentFixture<ViewInternshipCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInternshipCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInternshipCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
