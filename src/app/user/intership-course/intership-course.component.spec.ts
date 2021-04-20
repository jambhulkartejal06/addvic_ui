import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershipCourseComponent } from './intership-course.component';

describe('IntershipCourseComponent', () => {
  let component: IntershipCourseComponent;
  let fixture: ComponentFixture<IntershipCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntershipCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntershipCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
