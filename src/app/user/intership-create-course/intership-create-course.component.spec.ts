import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershipCreateCourseComponent } from './intership-create-course.component';

describe('IntershipCreateCourseComponent', () => {
  let component: IntershipCreateCourseComponent;
  let fixture: ComponentFixture<IntershipCreateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntershipCreateCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntershipCreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
