import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDigitalMarketingEnrollmentIntrestComponent } from './view-digital-marketing-enrollment-intrest.component';

describe('ViewDigitalMarketingEnrollmentIntrestComponent', () => {
  let component: ViewDigitalMarketingEnrollmentIntrestComponent;
  let fixture: ComponentFixture<ViewDigitalMarketingEnrollmentIntrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDigitalMarketingEnrollmentIntrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDigitalMarketingEnrollmentIntrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
