import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDigitalMarketingCourseComponent } from './view-digital-marketing-course.component';

describe('ViewDigitalMarketingCourseComponent', () => {
  let component: ViewDigitalMarketingCourseComponent;
  let fixture: ComponentFixture<ViewDigitalMarketingCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDigitalMarketingCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDigitalMarketingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
