import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingAndGraphicCourseComponent } from './digital-marketing-and-graphic-course.component';

describe('DigitalMarketingAndGraphicCourseComponent', () => {
  let component: DigitalMarketingAndGraphicCourseComponent;
  let fixture: ComponentFixture<DigitalMarketingAndGraphicCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalMarketingAndGraphicCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalMarketingAndGraphicCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
