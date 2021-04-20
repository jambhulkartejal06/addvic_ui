import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInternshipEnrollmentIntrestComponent } from './view-internship-enrollment-intrest.component';

describe('ViewInternshipEnrollmentIntrestComponent', () => {
  let component: ViewInternshipEnrollmentIntrestComponent;
  let fixture: ComponentFixture<ViewInternshipEnrollmentIntrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInternshipEnrollmentIntrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInternshipEnrollmentIntrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
