import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalCreateCourseComponent } from './digital-create-course.component';

describe('DigitalCreateCourseComponent', () => {
  let component: DigitalCreateCourseComponent;
  let fixture: ComponentFixture<DigitalCreateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalCreateCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalCreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
